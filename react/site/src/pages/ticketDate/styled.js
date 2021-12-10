import styled from "styled-components";


const Conteiner = styled.body`
        
        margin: 0;
        box-sizing: border-box;

        background-image: url("/assets/images/fundo-cinema.svg");
        background-repeat: no-repeat;
        background-position: 50% 100%;
        background-size: cover;
        height: 170vh;

        display: flex;
        flex-direction: column;

        @media(max-width: 1200px){
            background-repeat: no-repeat;
            background-position: 15% 100%;
            background-size: cover;
            height: 140.5vh;

        }

        @media(max-width: 1040px){
            background-repeat: no-repeat;
            background-position: 30% 100%;
            background-size: cover;
            height: 175vh;
        }
`

const Texto = styled.article`

        display: flex;
        justify-content: center;
        p{
            color: #fff;
            font-size: 3em;
            color: #E1E1E1;
            text-shadow: 1px 1px 4px rgba(202, 202, 202, 0.87);
            position: absolute;
        }
`
const Boxes = styled.article`
   
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    padding: 8em 13em;
`
const LittleBoxes = styled.article`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;


`

export { Conteiner, Texto, Boxes, LittleBoxes}