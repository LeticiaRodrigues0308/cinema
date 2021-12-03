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
`
export {ContainerLogo}