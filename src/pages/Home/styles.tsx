import { styled } from "@mui/system";

export const StyledContainer = styled('div')`
    padding: 10px;
    margin: 0 2em 2em 2em;
    min-height: 76%;
    width: fill-available;
    border-radius: 35px;
    background-image: linear-gradient(to right, #141e30, #243b55);
    box-sizing: border-box;
    @media screen and (max-width: 1000px) {
        border-radius: 20px;
    }
`;

export const StyledForm = styled('form')`
    display:flex;
    flex-direction: column;
    grid-area: nova-tarefa;
    background-image: linear-gradient(to left, #0f0c29, #302b63, #24243e);
    border-radius: 10px;
    box-shadow: 2px 4px 4px #0000009F;
    padding: 1.5em 1em;
    width: 35%;
    height: fit-content;
    @media screen and (max-width: 1000px) {
        width: 80%;
        margin-bottom: 5%;
    }
    @media screen and (min-width: 1280px) {
            padding: 1.5em 1em 1.5em 2.5em;
    }
`;

export const StyledFooter = styled('div')`
    display: flex;
    justify-content: center;
    width: 98.5%;
    margin-top: 1em;
    @media screen and (max-width: 600px) {
        width: 99.6%;
    }
`;

export const WatchContainer = styled('div')`
    display:flex;
    flex-direction: column;
    align-items:center;
    width: 100%;
    margin: 0 0 1em 0px;
`;

export const ContentView = styled('div') `
    display: flex;
    justify-content: space-evenly;
    margin-top: 2%;
    height: 90%;
    @media screen and (max-width: 1000px) {
        margin-top: 5%;
        display: flex;
        flex-direction: column;
        align-items:center;
    }
`;

export const WatchDescription = styled('span')`
    margin-top: 2%;
    font-size: 25px;
    color:white;
    @media screen and (max-width: 600px) {
        font-size: 18px;
    }
    @media screen and (min-width: 1280px) {
            font-size: 30px;
    }
`;

export const SearchInputContainer = styled('div')`
    position:relative;
`;

export const SearchIconContainer = styled('div')`
    position:absolute;
    bottom: 18%;
    right: 3.7%;
    height: 45px;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    cursor: pointer;
    background: linear-gradient(62deg, #6e5f8f 0%, #a38ed2 100%);
    &:hover {
        background:linear-gradient(62deg, #a38ed2 0%, #f9c1eb 100%);
    }
    @media screen and (min-width: 1px) and (max-width: 600px) {
        height: 40px;
        right: 0%;
        bottom: 0%;
    }
    @media screen and (min-width: 601px) and (max-width: 1200px) {
        height: 40px;
        right: 5%;
        bottom: 0%;
    }
`;

export const SearchIcon = styled('span')``;