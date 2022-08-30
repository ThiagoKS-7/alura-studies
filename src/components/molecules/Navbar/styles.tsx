import { styled } from "@mui/system";

export const StyledNav = styled('nav')`
    margin-bottom: 2em;
`;

export const StyledList = styled('ul')`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
    display: flex;
    align-items: center;
    min-height: 60px;
`;

export const LinkItem = styled('li')`
    > a {
        display: inline-block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        border-radius: 5px;

        &:hover {
            background-color: #000!important;
        }
    }

`;