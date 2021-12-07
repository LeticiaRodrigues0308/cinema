import React from "react";
import {Container} from "./styled";
import Logo from '../../components/logo'
import LittleBox from '../../components/littleBox'
import Bigbox from '../../components/bigBox'

export default function LanguageMovie(){
    return(
        <Container>
            <div className="cabecalho">
                <Logo/>
                <div className="texto">Selecione o horário e o idioma</div>
            </div>
            <div className="conteudo">
                <div className="filme">
                    <Bigbox/>
                </div>
                <div className="salas_horarios">
                    <LittleBox/>
                    <LittleBox/>
                    <LittleBox/>
                    <LittleBox/>
                    <LittleBox/>
                    <LittleBox/>
                </div>
            </div>
        </Container>
    );
} 