import { styled } from "@mui/system";

export const StyledList = styled('ul')`
    padding: 0;
    margin: 0;
    overflow-y: scroll;
    max-height: 272px;
    ::-webkit-scrollbar {
        width:10px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #7687A1;
        border-radius: 10px;
    }
    ::-webkit-scrollbar-track {
        background-color: #5D677C;
    }
    @media screen and (max-width: 1000px) {
        width: 100%;
        height: 240px;
    }
    @media screen and (min-width: 1380px) and (max-width: 2599px) {
        max-height: 320px;
    }
`;

export const Title = styled('h2')`
    padding: 0;
    margin: 0 0 0 1.5em;
    color: white;
    @media screen and (min-width: 1380px) and (max-width: 2599px) {
        font-size: 28px;
    }
    @media screen and (min-width: 2600px) {
        font-size: 45px;
        margin: 0 0 0 0.8em;
    }
`;

export const ListContainer = styled('div')`
    display:flex;
    flex-direction: column;
    width: 50%;
    @media screen and (max-width: 1000px) {
        margin: 2em 0;
        width: 95%;
    }
`;