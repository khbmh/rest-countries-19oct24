import { useEffect, useState } from 'react';
import Country from './Country';

function Countries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div className="text-center">
      <h1>Countries: {countries.length}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {countries.map((country) => {
          return (
            <Country
              key={`${Number(country.area)}+${Number(country.ccn3)}`}
              info={country}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Countries;
