import styled from "styled-components";

const Little = styled.div`

    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;

    background-color: #aa0a0a;
    color: #fff;
    font-family: monospace;

    border-radius: .8em;

    width: 10.7em;
    height: 9.7em;

    margin: 1em;

    :hover{
        background-color: #c60a0a;
    }

    .outros{
        font-size: 1.5em;
    }

    .data_hora{
        font-size: 2.5em;
    }

`

export {Little}