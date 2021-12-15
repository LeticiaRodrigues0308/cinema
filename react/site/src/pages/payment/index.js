import React from "react";
import {Container} from "./styled";
import Logo from '../../components/logo'
import Bigbox from '../../components/bigBox'

export default function Payment(){
    return(
        <Container>
            <div className="cabecalho">
            <Logo/>
                <div className="texto">Selecione a melhor opção de pagamento</div>
            </div>
            <div className="conteudo">
                <div className="filme">
                </div>
            </div>

        </Container>
    );
} 