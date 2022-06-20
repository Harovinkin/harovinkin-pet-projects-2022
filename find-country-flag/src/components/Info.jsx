import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section``;

const InfoImage = styled.img``;

const InfoTitle = styled.h2``;

const ListGroup = styled.div``;

const List = styled.ul``;

const ListItem = styled.li``;

export const Info = (props) => {
    const {
        name,
        nativeName,
        flag,
        capital,
        population,
        region,
        subREgion,
        topLevelDomain,
        currencies = [],
        languages = [],
        borders = [],
        push,
    } = props;

    return (
        <Wrapper>
            <InfoImage src={flag} alt={name} />
            <div>
                <InfoTitle>{name}</InfoTitle>
                <ListGroup>
                    <List></List>
                    <List></List>
                </ListGroup>
            </div>
        </Wrapper>
    );
};
