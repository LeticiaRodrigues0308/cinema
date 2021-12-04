import { ContainerTicket } from './styled'

export default function Ticket() {
    return (
        <div className="ticket-hover">
            <ContainerTicket>
                <div className="infos-ticket">
                    <div className="info-assento">A1 MEIA #864825684</div>
                    <div className="info-data">04/06/2021 17:02</div>
                    <div /* title={} */ className="info-filme">
                        {/* {'harry Potter e a' != null && 'harry Potter e a'.length >= 16
                                ? 'harry Potter e a'.substr(0, 16) + '...'  : 'harry Potter e a'} */}
                                Harry Potter e a...
                    </div>
                    <div className="info-sala">Dublado  Sala 08  13:00h</div>
                </div>

                <img src="/assets/images/ticket.svg" alt="erro" />
            </ContainerTicket>
        </div>
    )
}