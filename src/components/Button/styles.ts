import styled from 'styled-components';

export const ButtonContainer = styled.button `
    width: auto;
    padding: 12px 15px;
    border: none;
    border-radius: 3px;
    background-color: white;
    cursor: pointer;
    position: relative;

    background-color: ${props => props.theme.primary};

    background: linear-gradient(to right, ${props => props.theme.primary}, #CA00EB);
    color: ${props => props.theme.onPrimary};

    font-size: 14px;
    font-weight: bold;
`;