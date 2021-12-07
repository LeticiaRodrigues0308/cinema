import React from "react";
import styled from "styled-components";
import {Container} from "./styled";
import { Box } from "../../components/box";
import Fileira1 from "./fileira1";
import Fileira2 from "./fileira2";
import Fileira3 from "./fileira3";


const Cadeira = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;    

    background-image: url("./assets/images/iconcadeiravermelha.svg");
    width: 45px;
    height: 47px;

    color: white;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;

    margin: 4.5px 6px;
`;

export {Cadeira};


export default function Places(){

    return(
        <Container>
           <div className="cabecalho">
                <div className="marca">
                    <img src="./assets/images/iconCinemonk.svg" alt=""/>
                    <div className="titulo"> CineMonk </div>
                </div> 

                <div className="marca">
                    <div className="tit"> Selecione os melhores lugares </div>
                </div>
           </div>
           <div>
           <div className="box">

                <div className="box1">
                    <div className="fil1">
                        <Box> H </Box>
                    </div>

                    <div className="fil1">
                        <Box> G </Box>
                    </div>

                    <div className="fil1">    
                        <Box> F </Box>
                    </div>

                    <div className="fil1">
                        <Box> E </Box>
                    </div>

                    <div className="fil1">
                        <Box> D </Box>
                    </div>

                    <div className="fil1">
                        <Box> C </Box>
                    </div>

                    <div className="fil1">
                        <Box> B </Box>

                    </div>

                    <div className="fil1">
                        <Box> A </Box>
                    </div>
                </div>

               <div className="box2">
                    <div className="fil1">
                        <Fileira1/>
                    </div>

                    <div className="fil1">
                        <Fileira1/>
                    </div>

                    <div className="fil1">
                        <Fileira1/>
                    </div>

                    <div className="fil1">
                        <Fileira2/>
                    </div>

                    <div className="fil1">
                        <Fileira2/>
                    </div>

                    <div className="fil1">
                        <Fileira2/>
                    </div>

                    <div className="fil1">
                        <Fileira2/>
                    </div>

                    <div className="fil1">
                        <Fileira3/>
                    </div>
               </div>
               
           </div>
           <div className="botao"> <button> Próximo </button> </div>
           </div>
        </Container>
    );
}