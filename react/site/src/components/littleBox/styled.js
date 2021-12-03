import styled from "styled-components";

const Little = styled.div`

    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;

    background-color: #aa0a0a;
    color: #fff;

    border-radius: 1em;

    width: 12em;
    height: 12em;

    margin: 1em;

    :hover{
        background-color: #c60a0a;
    }

    .outros{
        font-size: 2em;
    }

    .data_hora{
        font-size: 3em;
    }

`

export {Little}