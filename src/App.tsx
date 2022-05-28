import styled, { createGlobalStyle } from "styled-components";
import { Image, ImagePreviewCard } from "./ImagePreview";

const GlobalStyle = createGlobalStyle`
    html, body {
        background: var(--color-bg);
        color: var(--color-main);
        margin: 0;
        padding: 0;
        width: 100vw;
        height: 100vh;
        padding: 0;
        margin: 0;
        font-family: monospace, sans-serif;
        overflow: hidden;
    }
    html {
        overflow-y: overlay;
    }
    * {
        box-sizing: border-box;
    }
    :root {
        color-scheme: dark;
        --font-fallback: monospace;
        --font-body: 'Hack', var(--font-fallback);
        --font-mono: 'Hack', var(--font-fallback);
        --user-font-scale: 1rem - 16px;
        --max-width: calc(100% - 2rem);
        font-size: 18px;
        --color-gray: #2d2e2f;
        --color-white: #fff;
        --color-text-white: #c8c8c8;
        --color-offwhite: #888;
        --color-almost-black: #121212;
        --color-black: #000;
        --color-pink: #ff43ac;
        --color-pink-alt: #ff81ba;
        --color-blue: #299bfd;
        --color-blue-alt: #59b8ff;
        --color-red: #ff5459;
        --color-yellow: #ffb85e;
        --color-yellow-alt: #ffcd8c;
        --color-green: #8dffde;
        --theme-round: 4px;
        background: transparent;
    }
    :root {
        font-size: 16px;
        --theme-bg: var(--color-almost-black);
        --theme-text-main: var(--color-white);
        --theme-text-post: var(--color-text-white);
        --theme-text-alt: var(--color-offwhite);
        --theme-link: var(--color-blue);
        --theme-code-border: 1px solid white;
        --theme-code-inline: var(--color-pink);
        --theme-person-link: var(--color-pink);
        --theme-person-bg: var(--color-almost-black);
        --theme-person-border: var(--color-white);
        --theme-person-highlight: rgba(255,255,255,0.1);
        --theme-line-color: #686868;
        --theme-bg-hover: var(--color-offwhite);
        --theme-bg-focus: var(--color-offwhite);
        --color-bg: var(--theme-bg);
        --color-main: var(--theme-text-main);
        --color-alt: var(--theme-text-alt);
    }
    @media print {
        html, body {
        --color-bg: white;
        --color-main: #2d2e2f;
        --color-alt: #c9c9c9;
        }
        :root {
        font-size: 14px;
        }
    }
`;

const Wrapper = styled.div`
    background: #121212;
    color: white;
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

const Container = styled.div`
    width: 900px;
    max-width: 100vw;
    margin: 0 auto;
    padding: 0 1rem;
    flex: 1;
`;

const Grid = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
`;

export const App = () => {
    return (
        <Wrapper>
            <GlobalStyle />
            <luc-header />
            <Container>
                <h1>Assets</h1>
                <Grid>
                    {(
                        [
                            {
                                preview: require("../public/head/500x500.webp"),
                                preview_file: require("../public/head/full.png"),
                                live_preview: false,
                                variants: [
                                    [
                                        require("../public/head/500x500.png"),
                                        "500.png",
                                        "500.png",
                                    ],
                                    [
                                        require("../public/head/500x500.webp"),
                                        "500.webp",
                                        "500.webp",
                                    ],
                                    [
                                        require("../public/head/full.png"),
                                        "full.png",
                                        "Full",
                                    ],
                                ],
                            },
                            {
                                preview: require("../public/react_live/1_by_1.png"),
                                preview_file: require("../public/react_live/full.jpg"),
                                live_preview: false,
                                variants: [
                                    [
                                        require("../public/react_live/1_by_1.png"),
                                        "react_live_1_by_1.png",
                                        "Square",
                                    ],
                                    [
                                        require("../public/react_live/full.jpg"),
                                        "react_live_full.jpg",
                                        "Full",
                                    ],
                                ],
                            },
                            {
                                preview: require("../public/landscape/head.gif"),
                                preview_file: require("../public/landscape/full.png"),
                                live_preview: true,
                                variants: [
                                    [require("../public/landscape/rick.gif"), "rick.gif", "Rick"],
                                    [require("../public/landscape/head.gif"), "head.gif", "Head"],
                                    [
                                        require("../public/landscape/full.png"),
                                        "full.png",
                                        "Full",
                                    ],
                                ],
                            },
                        ] as Image[]
                    ).map((image) => (
                        <ImagePreviewCard image={image} />
                    ))}
                </Grid>
            </Container>
            <luc-footer />
        </Wrapper>
    );
};
