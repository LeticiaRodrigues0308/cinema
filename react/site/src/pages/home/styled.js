import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url("./assets/images/fundo-cinema.svg");
    background-repeat: no-repeat;
    background-position: 20% 100%;
    background-size: cover;
    height: 100vh;
    

    .box1{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center; 
        padding: 55px 0px 83px;
    }

    .box1 img{
        width: 91px;
        height: 91px;
        margin: 0px 0px 12px;
    }

    .titulo{
        font-size: 64px;
        color: #F0A124;
    }

    .tit{
        font-size: 60px;
        color: white;
    }

    .botao {
        padding: 100px 0px 127px; 
    }

    button{
        color: white;
        font-size: 48px;
        width: 275px;
        height: 208px;
        border-radius: 54px;
        border: none;
        background: linear-gradient(183.2deg, #861B1B 12.34%, #F80000 148.35%);
        box-shadow: 8px 5px 5px 2px rgba(0, 0, 0, 0.25);
    }
`;

export { Container };