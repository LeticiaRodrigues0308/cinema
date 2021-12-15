import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-image: url("./assets/images/fundo-cinema.svg"); 
  

    .cabecalho{
        
    }
    .texto {
        font-size: 48px;
        color: #E1E1E1;
        text-shadow: 1px 1px 4px rgba(202, 202, 202, 0.87);
        position: absolute;
        left: 560px;
        top: 80px;
    }
    .conteudo{
        display: flex;
        flex-direction: row;
    }
`;

export { Container };