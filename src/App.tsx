import styled, { createGlobalStyle } from "styled-components";

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

const PreviewImage = styled.img`
    max-height: 160px;
    height: 160px;
    min-width: 160px;
    width: auto;
    object-fit: cover;
`;

const ImageThing = styled.div`
    border: 1px solid white;
    /* padding: 1rem; */
    width: fit-content;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    height: 160px;
`;

const DownloadSection = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-y: overlay;
`;

const DownloadLink = styled.a`
    color: white;
    text-decoration: none;
    padding: 0.5rem;
    padding-right: 3rem;
    &:hover {
        text-decoration: underline;
        background: rgba(255, 255, 255, 0.17);
    }
`;

const PreviewBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    color: white;
    opacity: 0;
    &:hover {
        opacity: 1;
    }
`;

const PostviewBlock = styled(PreviewBlock)`
    display: none;
    background: rgba(89,184,255,0.2);
    color: white;
    font-weight: bolder;
    text-shadow: 2px 2px 4px #000000;
`;

const PreviewLink = styled.a`
    position: relative;
    &:active {
        ${PreviewBlock} {
            display: none;
        }
        ${PostviewBlock} {
            display: flex;
        }
    }
`;

type Image = {
    // Image to use for the preview
    preview: string;
    // Image to download when preview is clicked
    preview_file: string;
    // Combination of Images and their Information
    variants: [string, string][];
};

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
                                variants: [
                                    [
                                        require("../public/head/500x500.png"),
                                        "500.png",
                                    ],
                                    [
                                        require("../public/head/500x500.webp"),
                                        "500.webp",
                                    ],
                                    [
                                        require("../public/head/full.png"),
                                        "Full",
                                    ],
                                ],
                            },
                            {
                                preview: require("../public/react_live/1_by_1.png"),
                                preview_file: require("../public/react_live/full.jpg"),
                                variants: [
                                    [
                                        require("../public/react_live/1_by_1.png"),
                                        "Square",
                                    ],
                                    [
                                        require("../public/react_live/full.jpg"),
                                        "Full",
                                    ],
                                ],
                            },
                        ] as Image[]
                    ).map((image) => {
                        return (
                            <ImageThing>
                                <PreviewLink
                                    href={image.preview}
                                    download={image.preview}
                                >
                                    <PreviewImage
                                        src={image.preview}
                                        alt={image.preview}
                                    />
                                    <PreviewBlock>
                                        Click to Download
                                    </PreviewBlock>
                                    <PostviewBlock>Let go!</PostviewBlock>
                                </PreviewLink>
                                <DownloadSection>
                                    {image.variants.map(
                                        (variant) =>
                                            variant && (
                                                <DownloadLink
                                                    href={variant[0]}
                                                    download={variant[1]}
                                                >
                                                    {variant[1]}
                                                </DownloadLink>
                                            )
                                    )}
                                </DownloadSection>
                            </ImageThing>
                        );
                    })}
                </Grid>
            </Container>
            <luc-footer />
        </Wrapper>
    );
};
