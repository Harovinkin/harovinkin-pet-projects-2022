import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { IoArrowBack } from 'react-icons/io5';
import { searchByCountry } from '../components/config';
import { Button } from '../components/Button';

export const Details = () => {
    const { name } = useParams();
    const navigate = useNavigate();
    const [country, setCountry] = useState(null);

    console.log(country);

    useEffect(() => {
        axios
            .get(searchByCountry(name))
            .then(({ data }) => setCountry(data[0]));
    }, [name]);

    const goBack = () => navigate(-1);
    return (
        <div>
            <Button onClick={goBack}>
                <IoArrowBack />
                BACK
            </Button>
            Details {name}
        </div>
    );
};
