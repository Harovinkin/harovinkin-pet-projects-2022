import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Container } from './Container';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';

const HeaderEl = styled.header`
    box-shadow: var(--shadow);
    background: var(--colors-ui-base);
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
`;

const Title = styled.a.attrs({
    href: '/',
})`
    color: var(--colors-text);
    font-size: var(--fs-sm);
    text-decoration: none;
    font-weight: var(--fw-bold);
`;

const ModeSwitcher = styled.div`
    display: flex;
    width: 110px;
    justify-content: space-between;
    align-items: center;
    color: var(--colors-text);
    font-size: var(--fs-sm);
    cursor: pointer;
    /* font-weight: var(--fw-bold); */
    text-transform: capitalize;
`;

export const Header = () => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <HeaderEl>
            <Container>
                <Wrapper>
                    <Title>Where is the world?</Title>
                    <ModeSwitcher onClick={toggleTheme}>
                        {theme === 'light' ? (
                            <IoMoonOutline size='16px' />
                        ) : (
                            <IoMoon size='16px' />
                        )}
                        Light Theme
                    </ModeSwitcher>
                </Wrapper>
            </Container>
        </HeaderEl>
    );
};
