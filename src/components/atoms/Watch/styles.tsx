import { styled } from "@mui/system";

export const WatchNumber = styled('span')`
    background-color: #5D677C;
    box-shadow: 2px 2px 4px #2B2B2B inset;
    height: inherit;
    width:fit-content;
    margin: 0.01em;
    text-align: center;
    padding: 8px 10px;
    border-radius: 10px;
    font-size: 1.5em;
    color: #c4c4c4;

    @media screen and (min-width:1280px) {
        font-size: 3.5em;
        width:fit-content;
    }
    @media screen and (max-width: 600px) {
        font-size: 0.8em;
        padding: 8px 10px;
    }
`;

export const WatchDivision = styled('span')`
    height: inherit;
    font-size: 1.5em;
    color: white;
    @media screen and (min-width:1280px) {
        font-size: 3.5em;
    }
    @media screen and (max-width: 600px) {
        font-size: 0.8em;
    }
`;

export const WatchContainer = styled('div')`
    align-items: center;
    background-image: linear-gradient(to right, #0f0c29, #302b63, #24243e);
    border-radius: 10px;
    box-shadow: 2px 4px 4px #0000009F;
    box-sizing: border-box;
    display: flex;
    font-size: 5rem;
    justify-content: center;
    padding: 0.25em;
    width: fit-content;
    margin-top: 2%;
    height: 25%;
    margin: 0.1em 0 0.3em 0;
    @media screen and (max-width: 600px) {
        padding: 0.2em;
    }
    @media screen and (min-width:1280px) {
        font-size: 4.5em;
        padding: 0.8em;
        border-radius: 15px;
    }
`;