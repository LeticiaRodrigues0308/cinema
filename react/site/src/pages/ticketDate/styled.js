import styled from "styled-components";


const Conteiner = styled.body`
        background-image: url("/assets/images/fundo-cinema.svg");
        background-repeat: no-repeat;
        background-size: cover;
`

const Cabecalho = styled.header`

            display: flex;
            flex-direction: row; 

        img{
            width: 6em;
            margin: .5em;
        }

        h1{
            color: #f0a124;
            font-size: 4em;
            margin: .5em 0px;
        }
`

const Texto = styled.article`

        p{
            color: #fff;
            text-align: center;
            font-size: 3em;
        }
`



export { Cabecalho, Conteiner, Texto}