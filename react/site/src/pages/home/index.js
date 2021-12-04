import React from "react";
import {Container} from "./styled";
import { useHistory } from "react-router";

export default function Home(){
    const navigation = useHistory();

    const data = async () => {
        navigation.push('/ticketDate')
    }

    return(
        <Container>
            <div className="box1"> 
                <img src="./assets/images/iconCinemonk.svg" alt=""/>
                <div className="titulo"> CineMonk </div>
            </div>

            <div className="tit"> O que você quer fazer? </div>

            <div className="botao">
                <button onClick={data}> Comprar Ingresso </button>
            </div>    
        </Container>
    );
}