import React from "react";
import {Container} from "./styled";

export default function LanguageMovie(){
    return(
        <Container>
            <div className="cabecalho">
                <div className="logo"><img src="./assets/images/iconCinemonk.svg" alt=""/></div>
                <div className="texto">Selecione o horário e o idioma</div>
            </div>
            <div className="conteudo">
                <div className="filme">
                    <div className="imagem_filme"><img src="./assets/images/" alt=""/></div>
                    <div className="nome_filme"> Harry Potter e a Pedra Filosofal</div>
                    <div className="duplado_filme"> Dublado e legendado</div>
                    <div className="classificacao"> Classificação: +12 </div> 
                </div>
                
                <div className="salas_horarios">
                    <div className="box-1">
                        <div className="sala"> Sala 8</div>
                        <div className="horario"> 13:00 </div>
                        <div className="dublado|legendado"> Dublado </div>
                    </div>
                    <div className="box-2">
                        <div className="sala"> Sala 9</div>
                        <div className="horario"> 13:15 </div>
                        <div className="dublado|legendado"> Legendado </div>
                    </div>
                    <div className="box-3">
                        <div className="sala"> Sala 10</div>
                        <div className="horario"> 13:30 </div>
                        <div className="dublado|legendado"> Dublado </div>
                    </div>
                    <div className="box-4">
                        <div className="sala"> Sala 8</div>
                        <div className="horario"> 16:15 </div>
                        <div className="dublado|legendado"> Legendado </div>
                    </div>
                    <div className="box-5">
                        <div className="sala"> Sala 9</div>
                        <div className="horario"> 17:20 </div>
                        <div className="dublado|legendado"> Dublado </div>
                    </div>
                    <div className="box-6">
                        <div className="sala"> Sala 10</div>
                        <div className="horario"> 18:10 </div>
                        <div className="dublado|legendado"> Dublado </div>
                    </div>
                </div>
            </div>
        </Container>
    );
} 