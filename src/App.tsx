import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html, body {
        width: 100vw;
        height: 100vh;
        padding: 0;
        margin: 0;
        font-family: monospace, sans-serif;
    }
    * {
        box-sizing: border-box;
    }
    :root {
        font-size: 16px;
    }
`;

const Wrapper = styled.div`
    background: #121212;
    color: white;
    height: 100vh;
`;

export const App = () => {

    return (
        <Wrapper>
            <GlobalStyle />
            <luc-header />
            <div>
                Hello World
            </div>
            <luc-footer />
        </Wrapper>
    )
};