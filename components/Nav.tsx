import { FunctionComponent } from "react"
import Logo from "@components/Logo"
import s from "./Nav.module.scss"
import Menu from "./Menu"

const Nav: FunctionComponent = () => {
    return <nav className={s.container}>
        <Logo />
        <Menu />
    </nav>
}

export default Nav
