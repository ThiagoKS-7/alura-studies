import { styled } from "@mui/system";

export const StyledButton = styled('button')`
    background: linear-gradient(.25turn, rgb(245, 175, 153) 10%, #ff9cd1, #feb1e4); 
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
      background: linear-gradient(.25turn, rgb(205, 127, 105) 10%, #bd568d, #bc5c9c);
      box-shadow: 15px 10px 20px #0000009F;
      border: 0.5px solid #f008b6;
    }
    @media screen and (max-width: 600px) {
      padding: 0.5em 5.5em;
      border-radius: 15px;
    }
    @media screen and (min-width: 1380px) {
        font-size: 20px;
        padding: 0.9em 2.5em;
    }
`;