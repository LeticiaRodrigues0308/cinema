import { Container } from './styled'

import Ticket from '../../components/ticket/index'
import LogoColumn from '../../components/LogoColumn/index'

import { useHistory } from "react-router";

export default function PurchaseCompleted() {
    const navigation = useHistory();

    const menu = async () => {
        navigation.push('/')
    }

    return (
        <Container>
            <LogoColumn />

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