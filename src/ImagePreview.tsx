import { FC, useState } from 'react';
import styled from 'styled-components';

export type Image = {
    // Image to use for the preview
    preview: string;
    // Image to download when preview is clicked
    preview_file: string;
    // Wether or not to live preview the images
    live_preview: false;
    // Combination of Images and their Information
    variants: [string, string, string][];
};

const PreviewImage = styled.img`
    max-height: 160px;
    height: 160px;
    min-width: 160px;
    width: auto;
    object-fit: cover;
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
    background: rgba(89, 184, 255, 0.2);
    color: white;
    font-weight: bolder;
    text-shadow: 2px 2px 4px #000000;
`;

const HoverImage = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
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

const ImageThing = styled.div`
    border: 1px solid white;
    width: fit-content;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    height: 160px;

    &:hover {
        ${HoverImage} {
            display: block;
        }
    }
`;

export const ImagePreviewCard: FC<{ image: Image }> = ({ image }) => {
    const [hover, setHover] = useState<{
        preview: string;
        preview_file: string;
    }>({ preview: '', preview_file: '' });

    return (
        <ImageThing>
            <PreviewLink href={hover.preview_file}>
                <PreviewImage src={image.preview} alt={image.preview} />
                {hover && hover.preview && (
                    <HoverImage src={hover.preview} alt={hover.preview} />
                )}
                <PreviewBlock>Click to Download</PreviewBlock>
                <PostviewBlock>Let go!</PostviewBlock>
            </PreviewLink>
            <DownloadSection>
                {image.variants.map(
                    (variant) =>
                        variant && (
                            <DownloadLink
                                href={variant.at(0)}
                                download={variant.at(1)}
                                onMouseOver={() => {
                                    image.live_preview &&
                                        setHover({
                                            preview: variant.at(0),
                                            preview_file: variant.at(0),
                                        });
                                }}
                            >
                                {variant.at(2)}
                            </DownloadLink>
                        )
                )}
            </DownloadSection>
        </ImageThing>
    );
};
