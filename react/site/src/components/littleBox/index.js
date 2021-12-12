import React from "react";
import { useHistory } from "react-router";
import { Little } from "./styled";


export default function LittleBox (props) {
    const navigation = useHistory();

    const filme = async () => {
        navigation.push('/select')
    }
    return(
        <Little onClick={filme}>
            <b className="outros">{props.info.diaSemana}</b>
            <b className="data_hora">{props.info.dia}</b>
            <b className="outros">{props.info.mes}</b>
        </Little>
    )
}