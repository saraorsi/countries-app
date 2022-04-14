import { useEffect, useState } from 'react';
import { Country } from '../Country';

import './styles.scss';

export function CountriesTable({countries}){

    const [orderCountries, setOrderCountries] = useState([]);
    const [order, setOrder] = useState('asc');
    const [active, setActive] = useState('');

    useEffect(() => {
        setOrderCountries(countries);
        setActive('');
    }, [countries]);

    function getOrderCountries(value) {

        if( order === 'asc') {
            if( value === 'name') {
                const sorted = [...orderCountries].sort((a, b) => a.name.common.localeCompare(b.name.common));
                setOrderCountries(sorted);
            } else {
                const sorted = [...orderCountries].sort((a, b) =>
                (a[value] === b[value] ? 0 : a[value] === undefined ? -1 : b === undefined  ? -1 : a[value] > b[value] ? 1 : -1))
                setOrderCountries(sorted);
            }
            setActive(value);
            setOrder('desc');
        } else {
            if( value === 'name') {
                const sorted = [...orderCountries].sort((a, b) => b.name.common.localeCompare(a.name.common));
                setOrderCountries(sorted);
            } else {
                const sorted = [...orderCountries].sort((a, b) =>
                (a[value] === b[value] ? 0 : a[value] === undefined ? -1 : b === undefined  ? -1 : a[value] < b[value] ? 1 : -1))
                setOrderCountries(sorted);
            }
            setActive(value);
            setOrder('asc');
          

        }
    }

    return(
        <div className="countries-container">
            <div className="countries-header">
                <div>

                </div>
                <div
                    onClick={() =>  getOrderCountries('name') }
                    className={active === 'name' ? 'active' : ''}
                >
                    Name
                </div>
                <div
                     onClick={() =>  getOrderCountries('capital') }
                     className={active === 'capital' ? 'active' : ''}
                >
                    Capital
                </div>
                <div
                 onClick={() =>  getOrderCountries('population') }
                 className={active === 'population' ? 'active' : ''}
                >
                    Population
                </div>
                <div
                onClick={() =>  getOrderCountries('area') }
                className={active === 'area' ? 'active' : ''}
                >
                    Area
                </div>
            </div>
            <div className="countries-body">
                {orderCountries.map( country => 
                    <Country 
                        key={country.cca3}
                        cca3={country.cca3}
                        flag={country.flags.svg}
                        name={country.name.common}
                        capitals={country.capital}
                        population={country.population}
                        area={country.area}
                    />
                )}
            </div>
        </div>
    )
}