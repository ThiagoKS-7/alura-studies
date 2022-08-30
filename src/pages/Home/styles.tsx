import { styled } from "@mui/system";

export const StyledContainer = styled('div')`
    padding: 20px;
    margin: 0 2em 2em 2em;
    min-height: 76%;
    width: fill-available;
    border-radius: 5px;
    background-color: #f2f2f2;
    box-sizing: border-box;
`;

export const StyledForm = styled('form')``;

export const StyledFooter = styled('div')`
    display: flex;
    justify-content: flex-end;
    width: 98.5%;
    margin-top: 1em;
    @media screen and (max-width: 600px) {
        width: 99.6%;
    }
`;