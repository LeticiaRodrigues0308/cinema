import { ContainerTicket } from './styled'

export default function Ticket() {
    return (
        <ContainerTicket>
            <div className="infos-ticket">
                <div className="info-assento">A1 MEIA #864825684</div>
                <div className="info-data">04/06/2021 17:02</div>
                <div className="info-filme">Harry Potter e a Pedra Filosofal</div>
                <div className="info-sala">Dublado  Sala 08  13:00h</div>
            </div>

            <img src="/assets/images/ticket.svg" alt="erro" />
        </ContainerTicket>
    )
}