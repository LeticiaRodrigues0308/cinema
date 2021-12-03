import styled from "styled-components";

const Big = styled.div`

    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;

    background-color: #c60a0a;
    color: #fff;

    border-radius: 1em;

    width: 45rem;
    height: 25rem;

    margin: 2em;

    :hover{
        background-color: #aa0a0a;
    }

    .outros{
        font-size: 4em;
    }

    .data{
        font-size: 6em;
        margin: .5em;
    }

`

export {Big}