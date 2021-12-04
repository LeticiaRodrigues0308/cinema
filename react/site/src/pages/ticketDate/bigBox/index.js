import React from "react";
import { useHistory } from "react-router";
import { Big } from "./styled";

export default function BigBox(){
    const navigation = useHistory();

    const filme = async () => {
        navigation.push('/select')
    }
    return(
        <Big onClick={filme}>
            <b className="outros">HOJE</b>
            <b className="data">04</b>
            <b className="outros">MAIO</b>
        </Big>
    )
}