import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CustomSelect } from './CustomSelect';
import { Search } from './Search';

const options = [
    { value: 'Africa', label: 'Africa' },
    { value: 'America', label: 'America' },
    { value: 'Asia', label: 'Asia' },
    { value: 'Europe', label: 'Europe' },
    { value: 'Oceania', label: 'Oceania' },
];

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;

    @media (min-width: 767px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`;

export const Controls = () => {
    const [search, setSearch] = useState('');
    const [region, setRegion] = useState('');

    return (
        <Wrapper>
            <Search search={search} setSearch={setSearch} />
            <CustomSelect
                options={options}
                placeholder='Filter by Region'
                isClearable /** the ability to clear the selected option */
                isSearchable={false} /** disable to input own variants */
                value={region}
                onChange={setRegion}
            />
        </Wrapper>
    );
};
