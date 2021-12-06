import React from "react";
import { useHistory } from "react-router";
import { Bigbox } from "./styled";

export default function BigBox (){
    const navigation = useHistory();

    const filme = async () => {
        navigation.push('/select')
    }
    return(
        <Bigbox onClick={filme}>
            <div className="img"> <img src="../assets/images/filme.svg" alt=""/></div>
                <div className="box-texto">
                    <div className="nome">Harry Potter e a Pedra Filosofal</div>
                    <div className="box-idioma">
                        <div className="idioma">Legendado e Dublado</div>
                        <div className="classificacao">Classificação: +12</div>
                    </div>
                </div>
        </Bigbox>
    )
}