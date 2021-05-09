import { FunctionComponent } from "react"
import GlassContainer from "./GlassContainer"
import s from "./Menu.module.scss"

const Menu: FunctionComponent = () => {
    return (
        <div className={s.menu}>
            <GlassContainer styleName={s.menuList}>
                <li>Wszystkie Artykuły</li>
                <li>O mnie</li>
                <li>Projekty</li>
                <li>Kategorie</li>
            </GlassContainer >
            <img
                src="/images/blobs/nav-blob.svg"
                aria-hidden="true"
                className={s.menuBlob}
            />
        </div >
    )
}

export default Menu
