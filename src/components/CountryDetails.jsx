const CountryDetail = ({ country, weather }) => {
  console.log(weather);
  console.log(country);

  return (
    <>
      <img src={country.flags.png} alt={country.name + "flag"} />
      <p>
        The capital of {country.name.common} is {country.capital}
      </p>
      {weather ? (
        <p>
          The max temperature today will be:{" "}
          {weather.daily.temperature_2m_max[0]}&#8451; and the low:{" "}
          {weather.daily.temperature_2m_min[0]}&#8451;
        </p>
      ) : null}
    </>
  );
};

export default CountryDetail;
