import { Container } from './styled'

import Ticket from './ticket/index'

import { useHistory } from "react-router";

export default function PurchaseCompleted() {
    const navigation = useHistory();

    const menu = async () => {
        navigation.push('/')
    }

    return (
        <Container>
            <div>
                <img src="/assets/images/iconCinemonk.svg" alt="erro" />
                <div className="titulo">CineMonk</div>
            </div>

            <div className="box-subtitulo">
                <div className="subtitulo">Parabéns! Sua compra foi realizada com sucesso.</div>
                <div className="subtitulo">Agora é só aproveitar o filme :)</div>
            </div>

            <div className="box-ticket">
                <Ticket />
                <Ticket />
                <Ticket />
                <Ticket />
            </div>
            
            <button className="btn-menu" onClick={menu}>Menu</button>
        </Container>
    )
}