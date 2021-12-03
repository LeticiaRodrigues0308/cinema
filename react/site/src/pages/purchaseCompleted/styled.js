import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    background-image: url('/assets/images/fundo-cinema.svg');

    padding: 2em 3em 7em 4em;

    .titulo {
        color: #F0A124;
        font-size: 3.5em;
        
        margin-bottom: .5em;
    }

    .subtitulo {
        color: #E1E1E1;
        font-size: 2em;
        line-height: 1.2em;
    }

    .box-ticket {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;

        margin-right: 6em;
    }

    .btn-menu {
        align-self: flex-end;

        font-family: Roboto;
        color: #767676;
        font-size: 2.5em;

        width: 146px;
        height: 146px;

        margin-top: -1.3em;
        
        border-radius: 100%;

        background-color: radial-gradient(50% 50% at 50% 50%, #F4F4F4 0%, #C1C1C1 100%);

        cursor: pointer;
    }

    .btn-menu:hover {
        background-color: #bababa;
        transition-duration: 0.5s;
    }
`

export { Container }