import React, { useCallback } from "react";
import { TWatchProps } from "./@types";
import { WatchContainer, WatchDivision, WatchNumber } from "./styles";

export default function Watch(props: TWatchProps) {
    const getMins = useCallback((time: any) => {
        if (Math.floor(time / 60) >= 100) {
            return 99;
        } else {
            return Math.floor(time / 60) || 0;
        }

    }, []);

    const getSecs = useCallback((time: any) => {
        if (Math.floor(time / 60) >= 100 && props.time % 60 >= 60) {
            return 59;
        } else if (Math.floor(time / 60) >= 100 && props.time % 60 < 60) {
            return Math.floor(time / 60) - 99;
        } else {
            return time % 60 || 0;
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const minutos = getMins(props.time);
    const segundos = getSecs(props.time);
    const [minutoDezena, minutoUnidade] = minutos.toString().padStart(2, '0');
    const [segundoDezena, segundoUnidade] = segundos.toString().padStart(2, '0');

    return (
        <WatchContainer>
            <WatchNumber>{minutoDezena}</WatchNumber>
            <WatchNumber>{minutoUnidade}</WatchNumber>
            <WatchDivision>:</WatchDivision>
            <WatchNumber>{segundoDezena}</WatchNumber>
            <WatchNumber>{segundoUnidade}</WatchNumber>
        </WatchContainer>
    )
}