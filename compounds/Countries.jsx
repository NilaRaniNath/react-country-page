import React, { use, useState } from 'react';
import Country from './Country';
import './Countries.css';

const Countries = ({countriesPromise}) => {
    const [visitedCountries , setVisitedCountries]=useState([]);
    const handleVisitedCountries = (country) => {
        console.log("country", country);
        const present=visitedCountries.find(v => v.name.common = country.name.common);
        if(present){
           const desh= visitedCountries.filter(b => b.name.common != country.name.common);
            setVisitedCountries(desh);

        }else{
        const newCountry=[...visitedCountries,country];
        setVisitedCountries(newCountry)
        }
    }


    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    
    return (
        <div>
            <h1>Country : {visitedCountries.length}</h1>
            
           <div className='countries '>
             {
                countries.map(country => <Country key={country.cca3.cca3}
                    handleVisitedCountries={handleVisitedCountries}
                    country={country}></Country>)
            }
           </div>
        </div>
    );
};

export default Countries;