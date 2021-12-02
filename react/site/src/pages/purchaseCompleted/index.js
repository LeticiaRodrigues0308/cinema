import { ContainerPurchaseCompleted } from './styled'

export default function PurchaseCompleted() {
    return (
        <ContainerPurchaseCompleted>
            <div>
                <img src="/assets/images/iconCinemonk.svg" alt="erro" />
                <h1>CineMonk</h1>
            </div>

            <div>
                <h2>Parabéns! Sua compra foi realizada com sucesso.</h2>
                <h2>Agora é só aproveitar o filme :)</h2>
            </div>

            <div className="box-conteudo">
                <div className="box-tickets">
                    <img src="" alt="erro" />
                </div>

                <button className="btn-menu">Menu</button>
            </div>
        </ContainerPurchaseCompleted>
    )
}