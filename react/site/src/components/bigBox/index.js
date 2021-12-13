import React from "react";
import { useHistory } from "react-router";
import { Bigbox } from "./styled";

export default function BigBox (props){
    const navigation = useHistory();

    const filme = async () => {
        navigation.push('/select')
    }
    return(
        <Bigbox onClick={filme}>
            <div className="img"> <img src="../assets/images/filme.svg" alt=""/></div>
                <div className="box-texto">
                    <div className="nome">{props.info.filme.nome}</div>
                    <div className="box-idioma">
                        <div className="idioma">{props.info.filme.idiomas}</div>
                        <div className="classificacao">{props.info.filme.classificacao}</div>
                    </div>
                </div>
        </Bigbox>
    )
}