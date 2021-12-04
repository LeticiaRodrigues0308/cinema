import React from "react";
import { useHistory } from "react-router";
import { Little } from "./styled";


export default function LittleBox (){
    const navigation = useHistory();

    const filme = async () => {
        navigation.push('/select')
    }
    return(
        <Little onClick={filme}>
            <b className="outros">Sábado</b>
            <b className="data_hora">05</b>
            <b className="outros">MAIO</b>
        </Little>
    )
}