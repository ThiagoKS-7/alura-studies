import { styled } from "@mui/system";

export const StyledButton = styled('button')`
    background-color: #4ca3af;
    border: none;
    border-radius: 4px;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    display: block;

    &:not(:last-child) {
      border-bottom: none; /* Prevent double borders */
    }

    &:hover {
      background-color: #3e6e8e;
    }
`;