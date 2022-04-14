import { useEffect, useState } from 'react';
import { CountriesTable } from "../../components/CountriesTable";
import { Search } from "../../components/Search";

export function Home() {
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        async function getCountries() {
            const response = await fetch('https://restcountries.com/v3.1/all');
            const data = await response.json();
            setCountries(data);
        }
        getCountries()
    }, []);

    const filteredCountries = countries.filter( country => country.name.common.toLowerCase().includes(search))

    function getSearchValue(e){
        e.preventDefault()
        setSearch(e.target.value.toLowerCase())
        console.log(e.target.value.toLowerCase())
    }

    return(
        <>
        <Search 
            total={filteredCountries.length}
            search={getSearchValue}
        />
        <CountriesTable countries={filteredCountries} />
        </>
    )
}