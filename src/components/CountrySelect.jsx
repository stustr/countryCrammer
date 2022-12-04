const CountrySelect = ({ countries, onCountrySelected }) => {
  const countryItems = countries.map((country, index) => {
    return (
      <option value={index} key={index}>
        {country.name.common}
      </option>
    );
  });

  const sortedCountryItems = countryItems.sort((x, y) => {
    let a = x.props.children,
      b = y.props.children;
    return a == b ? 0 : a > b ? 1 : -1;
  });


  const handleChange = (event) => {
    const chosenCountry = countries[event.target.value];
    onCountrySelected(chosenCountry);
  };

  return (
    <div id="select-comp">
      <select defaultValue="" onChange={handleChange}>
        <option value="">Pick a country to learn more about...</option>
        {sortedCountryItems}
      </select>
    </div>
  );
};

export default CountrySelect;
