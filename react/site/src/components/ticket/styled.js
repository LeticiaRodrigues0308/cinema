import styled from "styled-components";

const ContainerTicket = styled.div`
    color: #ffffff;

    .infos-ticket {
        position: relative;
        top: 11.3em;

        margin-top: -6em;
    }

    .info-assento {
        color: #960404;
        font-size: 18px;

        position: relative;
        left: .7em;
    }

    .info-data {
        color: #373737;
        font-size: 14px;

        position: relative;
        top: .4em;
        right: .9em;
    }

    .info-filme {
        color: #000000;
        font-size: 21px;

        position: relative;
        top: .7em;
        left: .5em;
    }

    .info-sala {
        color: #960404;
        font-size: 18px;

        position: relative;
        top: 1.5em;
        left: 1.3em;
    }

    img {
        width: 380px;
        height: 380px;

        margin-top: -2em;
        margin-bottom: -7em;
    }
`

export { ContainerTicket }