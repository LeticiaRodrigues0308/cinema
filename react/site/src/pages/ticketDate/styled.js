import styled from "styled-components";


const Conteiner = styled.body`
        background-image: url("/assets/images/fundo-cinema.svg");
        background-repeat: no-repeat;
        background-size: cover;

        display: flex;
        flex-direction: column;
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
const Boxes = styled.article`
   
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`


export { Cabecalho, Conteiner, Texto, Boxes}