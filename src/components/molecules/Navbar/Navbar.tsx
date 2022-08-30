import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { routes } from "@/data/utils/routes";
import { LinkItem, StyledList, StyledNav } from "./styles";
import { TNavProps } from "./@types";

export default function Navbar(props:TNavProps) {
    const handleClick = useCallback((event:any) => {
        const list = document.querySelector("ul.css-x4ibcm");
        getSelectedItem(list,event.target.firstChild.data);
    },[]);

    const getSelectedItem = (list:any,value:any) => {
        list.querySelectorAll("a").forEach((item:any) => {
            if (item.firstChild.data === value) {
                item.style.backgroundColor = "#04AA6D";
                item.style.fontWeight = "bold";
            } else {
                item.style.backgroundColor = "transparent";
                item.style.fontWeight = "normal";
            }
        })
    };

    return (
        <StyledNav>
        <StyledList>
            {routes.map(el => {
                if (el.key !== "/about") {
                    return(
                        <LinkItem onClick={handleClick}>
                            <Link key={el.key} to={el.key}>{el.name}</Link>
                        </LinkItem>
                    )
                }
            })}
        </StyledList>
        </StyledNav>
    );
}