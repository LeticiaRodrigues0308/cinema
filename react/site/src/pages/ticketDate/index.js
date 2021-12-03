import React from "react";
import { Cabecalho, Conteiner, Texto } from "./styled"


export default function ticketDate() {
    
    return(
        <Conteiner>
            <Cabecalho>
                    <img src="./assets/images/iconCinemonk.svg" alt=""/>
                    <h1> CineMonk </h1>
            </Cabecalho>
            <Texto>
                <p> Escolha a data que você deseja comprar o ingresso </p>
            </Texto>



        </Conteiner>
    )
}