import { React, useState, useEffect } from "react";

import {LittleBoxes, Boxes, Conteiner, Texto} from "./styled"

import BigBox from "./bigBox";

import LittleBox from "../../components/littleBox";
import Logo from "../../components/logo"

import Api from '../../service/api.js'
const api = new Api();

export default function TicketDate() {
    const [days, setDays] = useState([])

    async function showAvailableDays() {
        let r = await api.availableDays()
        setDays(r)
    }

    useEffect(() => {
        showAvailableDays();
    }, [])

    return(
            <Conteiner>
                <Logo/>
                <Texto>
                    <p> Escolha a data que você deseja comprar o ingresso. </p>
                </Texto>
                <Boxes>

                     <BigBox  />

                    <LittleBoxes>
                        <LittleBox /> 
                        <LittleBox /> 
                        <LittleBox /> 
                        <LittleBox /> 
                        <LittleBox /> 
                        <LittleBox /> 
                    </LittleBoxes>

                </Boxes>
            </Conteiner>
    )
}