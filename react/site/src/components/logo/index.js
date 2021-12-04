import styled from 'styled-components'

export default function Logo() {
    return (
        <ContainerLogo>
            <div className="logo">
                <div className="icon"><img src="../assets/images/iconCinemonk.svg" alt=""/></div>
                <div className="titulo">CineMonk</div>
            </div>
        </ContainerLogo>
    )
}


const ContainerLogo = styled.div`
    .logo {
        display: flex;
        flex-direction: row;
        color: #F0A124;
        font-size: 64px;
        margin: 1em;
        font-family: 'seoulhangang-b-regular', sans-serif;
    }
    .icon {
        margin-right: .5em;
    }

    @media(max-width: 1024px) {
        .logo {
            font-size: 20px;
            margin: 1em;
        }
        .icon img{
            margin: .2em 0em;
            width: 35px;
        }
        .titulo {
            margin: .5em 0em 0em 0em;
        }
    }

        @media(max-width: 1280px) {
            .logo {
            font-size: 22px;
            margin: 1em;
            }
            .icon img{
                margin: .3em 0em;
                width: 38px;
            }
            .titulo {
                margin: .5em 0em 0em 0em;
            }
        }
`
export {ContainerLogo}