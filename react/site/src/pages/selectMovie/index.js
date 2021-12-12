import { React, useState, useEffect } from "react";

import Logo from "../../components/logo"
import BoxMovie from "../../components/boxMovie"

import { ContainerSelect } from "./styled"

import Api from '../../service/api.js'
const api = new Api();

export default function SelectMovie() {
    const [movies, setMovies] = useState([])

    async function showAvailableMovies(date) {
        let r = await api.availableMovies(date)
        setMovies(r)
    }

    useEffect(() => {
        showAvailableMovies();
    }, [])

    return (
        <ContainerSelect>
                <div className="cabecalho">
                    <Logo/>
                    <div className="texto">Selecione o filme que deseja assistir</div>
                </div>
                <div className="boxes">
                    {movies.map((item) => 
                        <BoxMovie info={item} />
                    )}
                </div>
        </ContainerSelect>
    )
}