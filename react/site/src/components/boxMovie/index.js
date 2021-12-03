import styled from 'styled-components';

export default function BoxMovie() {
    return (
        <ContainerMovie>
            <div className="box">
                <div className="img"> <img src="../assets/images/filme.svg" alt=""/></div>
                <div className="nome">Harry Potter e a Pedra Filosofal</div>
                <div className="idioma">Legendado e Dublado</div>
                <div className="classificacao">Classificação: +12</div>
            </div>
        </ContainerMovie>
    )
}


const ContainerMovie = styled.div`
    .box {
        background-color: #AA0A0A;
        width: 379px;
        height: 214px;
        border-radius: 16px 16px 0px 0px;
        box-shadow: 2px -2px 3px 2px rgba(11, 0, 0, 0.25);
        margin: 1em 1em 0em 6em;
    }
    img{
        width: 132px;
        height: 204px;
        border-radius: 16px 0px 0px 0px;
        padding: 5px 0px 0px 3px
    }
`

export {ContainerMovie}