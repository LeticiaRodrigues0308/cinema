import styled from "styled-components";



const ContainerSelect = styled.div`
    display: flex;
    flex-direction: column;
    background-image: url("./assets/images/background.png");
    height: 100vh;
    background-position: 20% 100%;
    background-size: cover;
    .boxes {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 80%;
        margin-left: 20em;
    }
    .texto {
        font-size: 48px;
        color: #E1E1E1;
        text-shadow: 1px 1px 4px rgba(202, 202, 202, 0.87);
        position: absolute;
        left: 566px;
        top: 80px;
    }
`

export {ContainerSelect}