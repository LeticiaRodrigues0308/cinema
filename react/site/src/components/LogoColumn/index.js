import styled from 'styled-components'

export default function LogoColumn() {
    return (
        <ContainerLogo>
            <div>
                <img src="/assets/images/iconCinemonk.svg" alt="erro" />
                <div className="titulo">CineMonk</div>
            </div>
        </ContainerLogo>
    )
}


const ContainerLogo = styled.div`
    display: flex;
    flex-direction: column;

    .titulo {
        color: #F0A124;
        font-size: 4em;
        font-family: 'seoulhangang-b-regular', sans-serif;
        
        margin-bottom: .5em;
    }
`
export { ContainerLogo }