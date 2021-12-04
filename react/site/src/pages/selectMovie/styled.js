import styled from "styled-components";



const ContainerSelect = styled.div`
    display: flex;
    flex-direction: column;
    background-image: url("./assets/images/background.png");
    height: 100vh;                       
    background-size: cover;
    background-position: 20% 100%;
    .boxes {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 80%;
        margin-left: 10em;
        justify-content: center;
        align-items: center;
    }
    .texto {
        font-size: 48px;
        color: #E1E1E1;
        text-shadow: 1px 1px 4px rgba(202, 202, 202, 0.87);
        position: absolute;
        left: 566px;
        top: 80px;
    }

    @media(max-width: 1024px) {
        .boxes {
            width: 65%;
            margin-left: 0em;
        }
        
        .texto {
            font-size: 16px;
            position: absolute;
            left: 200px;
            top: 35px;
        }
    }

    @media(max-width: 1280px) {
        .boxes {
            width: 65%;
            margin-left: 0em;
        }
        
        .texto {
            font-size: 18px;
            position: absolute;
            left: 200px;
            top: 35px;
        }
    }
`

export {ContainerSelect}