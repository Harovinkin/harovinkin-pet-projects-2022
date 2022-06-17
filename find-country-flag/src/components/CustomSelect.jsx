import styled from 'styled-components';
import Select from 'react-select';

export const CustomSelect = styled(Select).attrs({
    styles: {
        control: (provided) => ({
            ...provided,
            backgroundColor: 'var(--colors-ui-base)',
            color: 'var(--colors-text)',
            borderRadius: 'var(--brd-rad)',
            padding: '4px 0.30rem',
            border: 'none',
            boxShadow: 'var(--shadow)',
            heigth: '50px',
        }),
        option: (provided, state) => ({
            ...provided,
            cursor: 'pointer',
            color: 'var(--colors-text)',
            backgroundColor: state.isSelected
                ? 'var(--colors-bg)'
                : 'var(--colors-ui-base)',
        }),
    },
})`
    width: 210px;
    border-radius: var(--brd-rad);
    font-family: var(--family);
    border: none;

    & > * {
        box-shadow: var(--shadow);
    }

    & * {
        color: var(--colors-text) !important;
    }

    & > div[id] {
        background-color: var(--colors-ui-base);
    }
`;
