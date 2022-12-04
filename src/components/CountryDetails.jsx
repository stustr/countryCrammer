const CountryDetail = ({ country, weather, currency, time }) => {
  const date = new Date();
  let UTChours = date.getUTCHours();
  let UTCmins = date.getUTCMinutes();
  let countryHours = UTChours + parseInt(country.timezones[0].slice(3));
  let countryTime = `${countryHours}:${UTCmins}`;
  return (
    <>
      <img id="flag-img" src={country.flags.png} alt={country.name + "flag"} />
      <p>
        The capital of {country.name.common} is {country.capital[0]} and the
        time is {countryTime}.
      </p>
      {weather ? (
        <p>
          The max temperature today will be:{" "}
          {weather.daily.temperature_2m_max[0]}&#8451; and the low:{" "}
          {weather.daily.temperature_2m_min[0]}&#8451;
        </p>
      ) : null}
      {currency ? (
        <p>
          The currency of the country is the{" "}
          {Object.values(country.currencies)[0].name}, and one is currently
          worth ${Object.values(currency)[1]}
        </p>
      ) : null}
    </>
  );
};

export default CountryDetail;
