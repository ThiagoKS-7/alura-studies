import React from "react";
import { TWatchProps } from "./@types";
import { WatchContainer, WatchDivision, WatchNumber } from "./styles";

export default function Watch(props:TWatchProps) {
    return (
        <WatchContainer>
            <WatchNumber>{props.time.decHour}</WatchNumber>
            <WatchNumber>{props.time.hour}</WatchNumber>
            <WatchDivision>:</WatchDivision>
            <WatchNumber>{props.time.decMin}</WatchNumber>
            <WatchNumber>{props.time.min}</WatchNumber>
        </WatchContainer>
    )
}