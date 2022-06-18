import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { Controls } from '../components/Controls';
import { ALL_COUNTRIES } from '../components/config';
import { CountriesList } from '../components/CountriesList';
import { Card } from '../components/Card';

export const HomePage = () => {
    const [countries, setCountries] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
    }, []);

    return (
        <>
            <Controls />
            <CountriesList>
                {countries.map((country) => {
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
                                discription: country.capital,
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
