import React from "react";
import Home from "@/pages/Home";
import Test from "@/pages/Test";
/**
 * ADICIONAR CADA PATH E PAGE NOVA NA CONST
*/
export const routes = [
    {key: "/", name:"Home", value: <Home/>},
    {key: "/lista", name:"Dashboard",value: <Test/>},
];