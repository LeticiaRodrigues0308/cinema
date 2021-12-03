import { containerLogo } from "./styled"


export default function Logo() {
    return (
        <containerLogo>
            <div className="logo">
                <div className="icon"><img src="../assets/images/iconCinemonk.svg" alt=""/></div>
                <div className="titulo">CineMonk</div>
            </div>
        </containerLogo>
    )
}