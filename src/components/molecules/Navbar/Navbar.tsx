import React, { useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { routes } from "@/data/utils/routes";
import { LinkItem, StyledList, StyledNav } from "./styles";
import { TNavProps } from "./@types";
import { useNavigate } from 'react-router-dom';


export default function Navbar(props:TNavProps) {
    const navigate = useNavigate();
    const handleClick = useCallback((event:any) => {
        const list = document.querySelector("ul");
        getSelectedItem(list,event.target.firstChild.data);
    },[]);

    const getSelectedItem = (list:any,value:any) => {
        list.querySelectorAll("a").forEach((item:any) => {
            console.log(item.firstChild.data)
            if (item.firstChild.data === value) {
                item.style.backgroundColor = "#04AA6D";
                item.style.fontWeight = "bold";
                item.style.textTransform = "uppercase";
            } else {
                item.style.backgroundColor = "transparent";
                item.style.fontWeight = "normal";
                item.style.textTransform = "none"
            }
        })
    };

    useEffect(() => {
        const list = document.querySelector("ul");
        getSelectedItem(list,"Home");
        navigate('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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