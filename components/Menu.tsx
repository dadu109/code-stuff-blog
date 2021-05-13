import { FunctionComponent } from "react"
import NavLink from '@components/NavLink'
import GlassContainer from "./GlassContainer"
import s from "./Menu.module.scss"

const Menu: FunctionComponent = () => {
    return (
        <div className={s.menu}>
            <GlassContainer styleName={s.menuList}>
                <NavLink href="/articles" >
                    <a>Wszystkie arykuły</a>
                </NavLink>
                <NavLink href="/about" >
                    <a>O mnie</a>
                </NavLink>
                <NavLink href="/projects" >
                    <a>Projekty</a>
                </NavLink>
                <NavLink href="/categories" >
                    <a>Kategorie</a>
                </NavLink>
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
