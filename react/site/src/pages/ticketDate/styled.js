import styled from "styled-components";


const Conteiner = styled.body`
        
        margin: 0;
        box-sizing: border-box;

        background-image: url("/assets/images/fundo-cinema.svg");
        background-repeat: no-repeat;
        background-position: 20% 100%;
        background-size: cover;
        height: 100vh;

        display: flex;
        flex-direction: column;
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
    align-items: center;

    margin: 2em 2em 4em 2em;

`
const LittleBoxes = styled.article`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`

export { Conteiner, Texto, Boxes, LittleBoxes}