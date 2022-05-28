import styled from 'styled-components';
const background = require('../../assets/login-background.png');

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;

    z-index: 1000;
    position: absolute;
    top: 0;
    left: 0;

    background-image: url(${background});
    background-position: bottom right;
    background-size: cover;

    > h1 {
        margin-top: 5px;
        margin-bottom: 20px;
        font-size: 24px;
        color: ${props => props.theme.primary};
    }

    > p {
        font-size: 14px;
        color: #A8A8A8;
    }

    > div {
        width: 250px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        > input {
            width: 100%;
        }

        > Button {
            width: 100%;
            margin-top: 15px;
        }
    }
`;