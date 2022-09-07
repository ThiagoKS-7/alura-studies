
import React from "react";
import Navbar from "@/components/molecules/Navbar/Navbar";
import { routes } from "@/data/utils/routes";
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function Router() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                {routes.map(el => {
                    return <Route key={el.key} path={el.key} element={el.value} />
                })}
            </Routes>
        </BrowserRouter>
    );
}