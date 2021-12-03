import styled from 'styled-components';

export default function BoxMovie() {
    return (
        <ContainerMovie>
                <div className="img"> <img src="../assets/images/filme.svg" alt=""/></div>
                <div className="box-texto">
                    <div className="nome">Harry Potter e a Pedra Filosofal</div>
                    <div className="box-idioma">
                        <div className="idioma">Legendado e Dublado</div>
                        <div className="classificacao">Classificação: +12</div>
                    </div>
                </div>
        </ContainerMovie>
    )
}


const ContainerMovie = styled.div`
        display: flex;
        background-color: #AA0A0A;
        cursor: pointer;
        width: 379px;
        height: 214px;
        border-radius: 16px 16px 0px 0px;
        box-shadow: 2px -2px 3px 2px rgba(11, 0, 0, 0.25);
        margin: 1em 1em 0em 1em;
        transition: all 0.4s;

        &:hover {
            -webkit-filter: drop-shadow(15px 10px 5px rgba(0,0,0,.5));
            filter: drop-shadow(15px 10px 5px rgba(0,0,0,.5));
        }
        img{
            width: 132px;
            height: 204px;
            border-radius: 16px 0px 0px 0px;
            padding: 5px 0px 0px 3px;
            cursor: pointer;
        }
        .box-texto {
        margin: 2.5em 0em 0em 1.3em;
        cursor: pointer;
        }
        .nome {
        font-size: 26px;
        color: #FFCA76;
        width: 206px;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        line-height: 130.1%;
        cursor: pointer;
        }
        .box-idioma {
            font-size: 20px;
            line-height: 130.1%;
            color: white;
            margin-top: 1em;
            cursor: pointer;
        }
`

export {ContainerMovie}