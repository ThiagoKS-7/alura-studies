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
    color: white;
    @media screen and (max-width: 1000px) {
        padding: 12px 12px 12px 5px;
        font-size: 18px;
        font-weight: bold;
    }
    @media screen and (min-width: 1380px) and (max-width: 2599px) {
        font-size: 28px;
        height: 45px;
    }
    @media screen and (min-width: 2600px) {
        font-size: 45px;
        height: 50px;
    }
    
`;

export const InputContainer = styled('div')`
    float: left;
    width: 75%;
    display: flex;
    align-items:end;
    margin-top: 1em;
    @media screen and (max-width: 1000px) {
        width: 100%;
        margin-top: 0;
    }
`;

export const StyledInput = styled('input')`
    width: 95%;
    height: 40px;
    padding: 8px 12px 4px;
    box-sizing: border-box;
    border: unset;
    color: #141e30;
    border-radius: 5px;
    background-color: #d3d6d8;
    box-shadow: 0px 2px 4px #2D2B2B9F inset;
    /* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
    @media screen and (max-width: 600px) {
        width: 100%;
        margin-top: 0;
    }
    @media screen and (min-width: 1380px) {
        font-size: 22px;
        height: 45px;
    }
    @media screen and (min-width: 2600px) {
        font-size: 30px;
        height: 50px;
    }
    
    &::placeholder {
        color: #141e30;
    }
    input[type=time] {
        resize: block;
    }
`;