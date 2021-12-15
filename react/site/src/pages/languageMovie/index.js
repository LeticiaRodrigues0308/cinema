import { React, useState, useEffect } from "react";

import { Container } from "./styled";

import Logo from '../../components/logo'
import LittleBox from '../../components/littleBox'
import Bigbox from '../../components/bigBox'

import Api from '../../service/api.js'
const api = new Api();

export default function LanguageMovie() {
    const [/* movies */, setMovies] = useState([])

    async function showAvailableMovies(date) {
        let r = await api.availableMovies(date)
        setMovies(r)
    }

    useEffect(() => {
        showAvailableMovies();
    }, [])

    return (
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