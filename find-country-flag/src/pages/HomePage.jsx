import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { Controls } from '../components/Controls';
import { ALL_COUNTRIES } from '../components/config';
import { CountriesList } from '../components/CountriesList';
import { Card } from '../components/Card';

export const HomePage = () => {
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState(countries);

    const navigate = useNavigate();

    const handleSearch = (search, region) => {
        let data = [...countries];

        if (region) {
            data = data.filter((country) => country.region.includes(region));
        }

        if (search) {
            data = data.filter((country) =>
                country.name.toLowerCase().includes(search.toLowerCase())
            );
        }

        setFilteredCountries(data);
    };

    useEffect(() => {
        axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
    }, []);

    useEffect(() => {
        handleSearch();
    }, [countries]);

    return (
        <>
            <Controls onSearch={handleSearch} />
            <CountriesList>
                {filteredCountries.map((country) => {
                    const goToDetails = () =>
                        navigate(`country/${country.name}`);

                    const countryInfo = {
                        img: country.flags.png,
                        name: country.name,
                        info: [
                            {
                                title: 'Population',
                                discription:
                                    country.population.toLocaleString(),
                            },
                            {
                                title: 'Region',
                                discription: country.region,
                            },
                            {
                                title: 'Capital',
                                discription: country.capital
                                    ? country.capital
                                    : 'There is no capital',
                            },
                        ],
                    };

                    return (
                        <Card
                            key={country.name}
                            onClick={goToDetails}
                            {...countryInfo}
                        />
                    );
                })}
            </CountriesList>
        </>
    );
};
