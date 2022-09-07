import React from "react";
import { TWatchProps } from "./@types";
import { WatchContainer, WatchDivision, WatchNumber } from "./styles";

export default function Watch(props:TWatchProps) {
    return (
        <WatchContainer>
            <WatchNumber>0</WatchNumber>
            <WatchNumber>0</WatchNumber>
            <WatchDivision>:</WatchDivision>
            <WatchNumber>0</WatchNumber>
            <WatchNumber>0</WatchNumber>
        </WatchContainer>
    )
}