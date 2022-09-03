import { styled } from "@mui/system";

export const StyledListItem = styled('li')`
    margin: 0.5em 2em;
    background-image: linear-gradient(to right, rgb(242, 112, 156), rgb(255, 148, 114));
    border-radius: 8px;
    box-shadow: 2px 4px 4px #0000009F;
    padding: 12px;
    list-style-type: none;
    position: relative;
    cursor: pointer;
    &:hover {
        background-image: linear-gradient(to right, rgb(174, 64, 101), rgb(183, 90, 61));
    }
`;

export const Title = styled('h3')`
    padding: 0;
    margin: 0;
    color: white;
    @media screen and (min-width: 1380px) and (max-width: 2599px) {
        font-size: 28px;
    }
    @media screen and (min-width: 2600px) {
        font-size: 45px;
    }
`;

export const Description = styled('span')`
    padding: 0;
    margin: 0;
    color:#BFBFBF;
    @media screen and (min-width: 1380px) and (max-width: 2599px) {
        font-size: 28px;
    }
    @media screen and (min-width: 2600px) {
        font-size: 30px;
    }
`;

export const Icon = styled('i')`
    margin: 0 5px 0 0;
`;