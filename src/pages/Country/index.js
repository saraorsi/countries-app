import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import './styles.scss';

export function Country() {
    const { cca3 } = useParams();

    const [ country, setCountry] = useState([]);
    const [ borders, setBorders] = useState([]);

    async function getCountry(id){
        const response = await fetch(`https://restcountries.com/v3.1/alpha/${id}`)
        const data = await response.json();
        return data[0];
    }

    useEffect(() => {
        async function fetchCountry(){
            const dataCountry = await getCountry(cca3);
            setCountry(dataCountry)
        }
        fetchCountry();
    }, [cca3])

    useEffect(() => {
        async function getBorders() {
            const dataBorders = await Promise.all(country.borders.map(
                border => getCountry(border)
            ))
            setBorders(dataBorders);
        }
        getBorders()
    }, [country])


    return(
        <div className="country-container">
            <div className="country-aside">
                <div className="country-aside-flag">
                    <img src={country?.flags?.svg} alt={country?.name?.common} />
                </div>
            </div>
            <div className="country-main">
                <div className="country-header">
                    <h1>{country?.name?.common}</h1>
                    <h2>{country?.name?.official}</h2>
                    <div>{country?.subregion}, {country.region}</div>
                </div>

                <div className="country-info">
                    <div className="country-info-title">
                        Capital
                    </div>
                    <div className="country-info-content">
                        {country.capital}
                    </div>
                </div>

                <div className="country-info">
                    <div className="country-info-title">
                        Population
                    </div>
                    <div className="country-info-content">
                        {country?.population}
                    </div>
                </div>

                <div className="country-info">
                    <div className="country-info-title">
                        Area
                    </div>
                    <div className="country-info-content">
                        {country?.area} km<sup>2</sup>
                    </div>
                </div>

                <div className="country-info">
                    <div className="country-info-title">
                        Currencies
                    </div>
                    <div className="country-info-content">
                        {country?.currencies && Object.values(country.currencies).map(currency => currency.name).join(', ') }
                    </div>
                </div>

                <div className="country-info">
                    <div className="country-info-title">
                        Languages
                    </div>
                    <div className="country-info-content">
                        {country?.languages && Object.values(country.languages).map(language => language).join(', ') }
                    </div>
                </div>
                {borders && borders.lenght !== 0 &&
                    <div className="country-info">
                        <div className="country-info-title">
                            Border Countries
                        </div>
                        <div className="country-info-content">
                            {borders.map(border => 
                                <Link className="country-border" key={border.cca3} to={`/country/${border.cca3}`}>                                  
                                    <div 
                                        className="country-border-flag"
                                        style={{
                                            backgroundImage: `url(${border.flags.svg})`                
                                        }}
                                    >

                                    </div>
                                    <div className="country-border-name">
                                        {border.name.common}
                                    </div>
                                 
                                </Link>
                            )}
                        </div>
                    </div>
                }

                <div className="country-button-map">
                    <a 
                        href={country?.maps?.googleMaps}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Find on the Map
                    </a>
                </div>

            </div>
        </div>
    )
}