import { useEffect, useState } from 'react';
import Country from './Country';

function Countries() {
  const [countries, setCountries] = useState([]);

  const [lovedCountries, setLovedCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const updateLovedCountries = (country) => {
    const newLovedCountries = [...lovedCountries, country];
    setLovedCountries(newLovedCountries);
  };
  const removeLovedCountry = (country) => {
    const newLovedCountries = lovedCountries.filter((c) => c !== country);
    setLovedCountries(newLovedCountries);
  };

  return (
    <div className="text-center">
      <h1>Countries: {countries.length}</h1>
      <div className='my-3'>
        <h1>loved countries: {lovedCountries.length}</h1>
        <div
          className={`${
            lovedCountries.length == 0 ? 'hidden' : 'grid'
          } grid-cols-3 md:grid-cols-5 lg:grid-cols-10 border p-2 mx-3 my-2 rounded-xl gap-3`}
        >
          {lovedCountries.map((country, id) => {
            return (
              <div
                className="flex items-center justify-center gap-1 p-1 border rounded-full"
                key={id}
              >
                <span className="text-[12px]">{country?.name?.common}</span>{' '}
                <img className="w-6" src={country.flags.svg} alt="" />
              </div>
            );
          })}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {countries.map((country, i) => {
          return (
            <Country
              key={i}
              info={country}
              updateLovedCountries={updateLovedCountries}
              removeLovedCountry={removeLovedCountry}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Countries;
