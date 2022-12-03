import { useEffect, useState } from "react";
import CountryDetail from "../components/CountryDetails";
import CountrySelect from "../components/CountrySelect";
import "./CountriesContainer.css";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";

const CountriesContainer = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (selectedCountry) {
      getWeather();
    }
  }, [selectedCountry]);

  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = () => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((countries) => setCountries(countries));
  };

  const getWeather = () => {
    const capLat = selectedCountry.capitalInfo.latlng[0];
    const capLong = selectedCountry.capitalInfo.latlng[1];
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${capLat}&longitude=${capLong}&daily=temperature_2m_max,temperature_2m_min&timezone=auto&start_date=2022-12-02&end_date=2022-12-02`
    )
      .then((response) => response.json())
      .then((weatherReq) => setWeather(weatherReq));
  };

  const onCountrySelected = (clickedCountry) => {
    setSelectedCountry(clickedCountry);
  };

  return (
    <>
      <CountrySelect
        countries={countries}
        onCountrySelected={onCountrySelected}
      />

      {selectedCountry ? (
        <MapContainer
          style={{ height: "400px", width: "500px" }}
          center={[
            selectedCountry.capitalInfo.latlng[0],
            selectedCountry.capitalInfo.latlng[1],
          ]}
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

      {selectedCountry ? (
        <CountryDetail country={selectedCountry} weather={weather} />
      ) : null}
    </>
  );
};

export default CountriesContainer;
