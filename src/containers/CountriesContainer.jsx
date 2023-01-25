import { useEffect, useState } from "react";
import CountryDetail from "../components/CountryDetails";
import CountrySelect from "../components/CountrySelect";
import "./CountriesContainer.css";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import NewsSection from "../components/News";

const CountriesContainer = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState();
  const [weather, setWeather] = useState();
  const [currency, setCurrency] = useState();
  const [news, setNews] = useState();
  const [time, setTime] = useState();

  useEffect(() => {
    if (selectedCountry) {
      const a = getWeather();
      const b = getCurrency();
      const c = getTime();
      const d = getNews();
      console.log(a);
      Promise.all([a, b, c, d]).then(
        ([weatherObj, currencyObj, timeObj, newsObj]) => {
          setWeather(weatherObj);
          setCurrency(currencyObj);
          setTime(timeObj);
          setNews(newsObj);
        }
      );
    }
  }, [selectedCountry]);

  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = () => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((countries) => setCountries(countries))
      .catch((error) => console.error(error));
  };

  const onCountrySelected = (clickedCountry) => {
    setSelectedCountry(clickedCountry);
  };

  const getWeather = () => {
    const capLat = selectedCountry.capitalInfo.latlng[0];
    const capLong = selectedCountry.capitalInfo.latlng[1];
    try {
      return fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${capLat}&longitude=${capLong}&daily=temperature_2m_max,temperature_2m_min&timezone=auto&start_date=2022-12-02&end_date=2022-12-02`
      ).then((response) => response.json());
    } catch (error) {
      console.log(error);
    }
  };

  const getCurrency = () => {
    const countryCurrency = Object.keys(
      selectedCountry.currencies
    )[0].toLowerCase();
    return fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/${countryCurrency}.json`
    ).then((response) => response.json());
    // .then((currencyReq) => setCurrency(currencyReq));
  };

  const getNews = () => {
    const countryName = selectedCountry.name.common.toLowerCase();
    try {
      return fetch(
        `https://content.guardianapis.com/search?q=${countryName}&format=json&api-key=test`
      ).then((response) => response.json());
      // .then((newsReq) => setNews(newsReq));
    } catch (error) {
      console.log(error);
    }
  };

  const getTime = () => {
    const capLat = selectedCountry.capitalInfo.latlng[0];
    const capLong = selectedCountry.capitalInfo.latlng[1];
    try {
      fetch(
        `http://api.timezonedb.com/v2.1/get-time-zone?key=M7DGBDEQA3SP&format=json&by=position&lat=${capLat}&lng=${capLong}
        `
      )
        .then((response) => response.json())
        .then((timeReq) => setTime(timeReq));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="c-c">
      <h2>Country Crammer</h2>
      <CountrySelect
        countries={countries}
        onCountrySelected={onCountrySelected}
      />

      <div id="country-info">
        {selectedCountry ? (
          <MapContainer
            style={{ height: "500px", width: "525px" }}
            center={[0, 0]}
            zoom={1}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
              position={[
                selectedCountry.capitalInfo.latlng[0],
                selectedCountry.capitalInfo.latlng[1],
              ]}
            />
          </MapContainer>
        ) : null}
        <div id="cd">
          {selectedCountry ? (
            <CountryDetail
              country={selectedCountry}
              weather={weather}
              currency={currency}
              time={time}
            />
          ) : null}
          {news ? <NewsSection news={news} /> : null}
        </div>
      </div>
    </div>
  );
};

export default CountriesContainer;
