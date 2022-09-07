import { styled } from "@mui/system";

export const StyledListItem = styled('li')`
    margin: 0.5em 2em;
    background-image: linear-gradient(.25turn, #fca3df 10%, #ff9ca0, rgb(255, 148, 114)); //linear-gradient(to right, rgb(242, 112, 156), rgb(255, 148, 114));
    border-radius: 8px;
    box-shadow: 2px 4px 4px #0000009F;
    padding: 12px;
    list-style-type: none;
    position: relative;
    cursor: pointer;
    &:hover {
        background-image: linear-gradient(.25turn, #e05db5 10%, #dc6569, rgb(206, 106, 76)); //linear-gradient(to right, rgb(174, 64, 101), rgb(183, 90, 61));
        border: 0.5px solid #f008b6;
        h4 {
            color:white;
            font-weight: 570;
            background: linear-gradient(.25turn, #757677,#a9b0b4);
        }
        span {
            color:white;
        }
    }
`;

export const Title = styled('h3')`
    padding: 0;
    margin: 0;
    margin-bottom: 10px;
    cursor: default;
    color: white;
    @media screen and (min-width: 1380px) and (max-width: 2599px) {
        font-size: 28px;
    }
    @media screen and (min-width: 2600px) {
        font-size: 45px;
    }
`;

export const Description = styled('h4')`
    padding: 0;
    margin: 0;
    color: #5f7dde;
    cursor: default;
    background:linear-gradient(.25turn, #b8bcbf,#e2ebf0);
    margin: 10px 0;
    padding: 0 15px;
    height: 5%;
    width: fit-content;
    border-radius: 10px;
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

export const DeleteIconContainer = styled('div')`
    background: linear-gradient(to right, #ff2d73, #911245 );
    padding: 0.5em 0.4em 0.3em 0.4em;
    border-radius: 20px;
    position: absolute;
    top: 22%;
    right: 30px;
    &:hover {
        background: linear-gradient(to right, #fc82ab, #ff2d73 );
        span {
            background-color: transparent;
        }
    }
`;

export const DeleteIcon = styled('span')`
    &:hover {
        background-color: transparent;
    }
`;