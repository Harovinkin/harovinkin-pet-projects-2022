import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { filterByCode } from './config';

const Wrapper = styled.section`
    padding-top: 3rem;
    width: 100%;
    display: grid;
    grid-template-columns: 100%;
    align-items: start;
    gap: 2.5rem;

    @media (min-width: 767px) {
        grid-template-columns: minmax(100px, 400px) 1fr;
        gap: 5rem;
    }

    @media (min-width: 1024px) {
        grid-template-columns: minmax(400px, 600px) 1fr;
    } ;
`;

const InfoImage = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

const InfoTitle = styled.h2`
    margin: 0;
    font-weight: var(--fw-normal);
`;

const ListGroup = styled.div`
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media (min-width: 1024px) {
        flex-direction: row;
        gap: 4rem;
    }
`;

const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

const ListItem = styled.li`
    line-height: 1.8;

    & > b {
        font-weight: var(--fw-bold);
    }
`;

const Meta = styled.div`
    padding-top: 2rem;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    align-items: flex-start;

    & > b {
        font-weight: var(--fw-bold);
    }

    @media (min-width: 767px) {
        flex-direction: row;
        align-items: top;
    } ;
`;

const TagGroup = styled.div`
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
`;

const Tag = styled.span`
    padding: 0 1rem;
    background-color: var(--colors-ui-base);
    box-shadow: var(--shadow);
    line-height: 1.5;
    cursor: pointer;
`;

export const Info = (props) => {
    const {
        name,
        nativeName,
        flag,
        capital,
        population,
        region,
        subregion,
        topLevelDomain,
        currencies = [],
        languages = [],
        borders = [],
        push,
    } = props;

    const [neighbors, setNeighbors] = useState([]);

    useEffect(() => {
        if (borders.length)
            axios
                .get(filterByCode(borders))
                .then(({ data }) => setNeighbors(data.map((c) => c.name)));
    }, [borders]);

    return (
        <Wrapper>
            <div>
                <InfoImage src={flag} alt={name} />
            </div>
            <div>
                <InfoTitle>{name}</InfoTitle>
                <ListGroup>
                    <List>
                        <ListItem>
                            <b>Native name:</b> {nativeName}
                        </ListItem>
                        <ListItem>
                            <b>Population:</b> {population}
                        </ListItem>
                        <ListItem>
                            <b>Region:</b> {region}
                        </ListItem>
                        <ListItem>
                            <b>Subregion:</b> {subregion}
                        </ListItem>
                        <ListItem>
                            <b>Capital:</b> {capital}
                        </ListItem>
                    </List>

                    <List>
                        <ListItem>
                            <b>Top Level Domain: </b>
                            {topLevelDomain.map((d) => (
                                <span key={d}>{d}</span>
                            ))}
                        </ListItem>
                        <ListItem>
                            <b>Currencies: </b>
                            {currencies.map((c) => (
                                <span key={c.code}>{c.name} </span>
                            ))}
                        </ListItem>
                        <ListItem>
                            <b>languages: </b>
                            {languages.map((l) => (
                                <span key={l.name}>{l.name}</span>
                            ))}
                        </ListItem>
                    </List>
                </ListGroup>

                <Meta>
                    <b>Border Countries: </b>
                    {!borders.length ? (
                        <span>There is no border countries</span>
                    ) : (
                        <TagGroup>
                            {neighbors.map((n) => (
                                <Tag
                                    key={n}
                                    onClick={() => push(`/country/${n}`)}
                                >
                                    {n}
                                </Tag>
                            ))}
                        </TagGroup>
                    )}
                </Meta>
            </div>
        </Wrapper>
    );
};
