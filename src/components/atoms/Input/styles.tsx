import { styled } from "@mui/system";

export const StyledRow = styled('div')`
    width: fill-available;
    &:after {
        content: "";
        display: table;
        clear: both;
    }
`;

export const LabelContainer = styled('div')`
    float: left;
    width: 25%;
    margin-top: 6px;
    @media screen and (max-width: 600px) {
        width: 100%;
        margin-top: 0;
    }
`;

export  const StyledLabel = styled('label')`
    padding: 12px 12px 12px 0;
    display: inline-block;
    font-size: 25px;
    @media screen and (max-width: 600px) {
        padding: 12px 12px 12px 5px;
        font-size: 14px;
    }
`;

export const InputContainer = styled('div')`
    float: left;
    width: 75%;
    display: flex;
    align-items:end;
    margin-top: 1em;
    @media screen and (max-width: 600px) {
        width: 100%;
        margin-top: 0;
    }
`;

export const StyledInput = styled('input')`
    width: 95%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
    /* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
    @media screen and (max-width: 600px) {
        width: 100%;
        margin-top: 0;
    }
`;