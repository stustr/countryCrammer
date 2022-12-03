const CountrySelect = ({ countries, onCountrySelected }) => {
  const countryItems = countries.map((country, index) => {
    return (
      <option value={index} key={index}>
        {country.name.common}
      </option>
    );
  });

  const handleChange = (event) => {
    const chosenCountry = countries[event.target.value];
    onCountrySelected(chosenCountry);
  };

  return (
    <>
      <select defaultValue="" onChange={handleChange}>
        <option value="">Pick a country to learn more about...</option>
        {countryItems}
      </select>
    </>
  );
};

export default CountrySelect;
