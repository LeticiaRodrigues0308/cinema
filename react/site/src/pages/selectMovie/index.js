
import Logo from "../../components/logo"
import BoxMovie from "../../components/boxMovie"
import { ContainerSelect } from "./styled"

export default function SelectMovie() {
    return (
        <ContainerSelect>
                <div className="cabecalho">
                    <Logo/>
                    <div className="texto">Selecione o filme que deseja assistir</div>
                </div>
                <div className="boxes">
                    <BoxMovie/>
                    <BoxMovie/>
                    <BoxMovie/>
                    <BoxMovie/>
                    <BoxMovie/>
                    <BoxMovie/>
                </div>
        </ContainerSelect>
    )
}