import React from "react";
import {LittleBoxes, Boxes, Conteiner, Texto} from "./styled"
import LittleBox from "../../components/littleBox";
import BigBox from "./bigBox";
import Logo from "../../components/logo"


export default function ticketDate() {
    
    return(
            <Conteiner>
                <Logo/>
                <Texto>
                    <p> Escolha a data que você deseja comprar o ingresso </p>
                </Texto>
                <Boxes>
                    <BigBox/>
                    <LittleBoxes>
                        <LittleBox/>
                        <LittleBox/>
                        <LittleBox/>
                        <LittleBox/>
                        <LittleBox/>
                        <LittleBox/>
                    </LittleBoxes>
                </Boxes>
            </Conteiner>
    )
}