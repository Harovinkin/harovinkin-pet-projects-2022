import { useState, useEffect } from 'react';
import axios from 'axios';

import { Controls } from './components/Controls';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { ALL_COUNTRIES } from './components/config';
import { CountriesList } from './components/CountriesList';
import { Card } from './components/Card';

function App() {
    const [countries, setCountries] = useState([]);

    console.log(countries);

    useEffect(() => {
        axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
    }, []);

    return (
        <>
            <Header />
            <Main>
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
            </Main>
        </>
    );
}

export default App;
