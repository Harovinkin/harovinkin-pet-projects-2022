import { useState, useEffect } from 'react';
import axios from 'axios';

import { Controls } from '../components/Controls';
import { ALL_COUNTRIES } from '../components/config';
import { CountriesList } from '../components/CountriesList';
import { Card } from '../components/Card';
import { Main } from '../components/Main';
export const HomePage = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
    }, []);
    return (
        <>
            <Controls />
            <CountriesList>
                {countries.map((country) => {
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
                                discription: country.capital,
                            },
                        ],
                    };

                    return <Card key={country.name} {...countryInfo} />;
                })}
            </CountriesList>
        </>
    );
};
