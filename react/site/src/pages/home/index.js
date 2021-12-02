import React from "react";
import {Container} from "./styled";

export default function Home(){
    return(
        <Container>
            <div className="box1"> 
                <img src="./assets/images/iconCinemonk.svg" alt=""/>
                <div className="titulo"> CineMonk </div>
            </div>

            <div className="tit"> O que você quer fazer? </div>

            <div className="botao">
                <button> Comprar Ingresso </button>
            </div>    
        </Container>
    );
}