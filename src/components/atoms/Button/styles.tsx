import { styled } from "@mui/system";

export const StyledButton = styled('button')`
    background-color: #59af4c;
    border: none;
    border-radius: 4px;
    color: white;
    text-align: center;
    text-decoration: none;
    font-size: 17px;
    font-weight: bold;
    padding: 0.9em 2.5em;
    cursor: pointer;
    display: block;
    text-transform: uppercase;
    &:not(:last-child) {
      border-bottom: none; /* Prevent double borders */
    }

    &:hover {
      background-color: #3e8e61;
    }
    @media screen and (max-width: 600px) {
      padding: 0.5em 5.5em;
      border-radius: 15px;
    }
    @media screen and (min-width: 1380px) {
        font-size: 30px;
        padding: 0.9em 2.5em;
    }
`;