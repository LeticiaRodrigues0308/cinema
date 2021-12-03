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
        width: 100%;
        align-items: center;
        justify-content: center;
    }
`

export {ContainerSelect}