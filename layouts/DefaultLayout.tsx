import { FunctionComponent } from "react"
import Nav from '@components/Nav'
import s from "./DefaultLayout.module.scss"

const DefaultLayout: FunctionComponent = ({ children }) => {
    return <div className={s.container}>
        <Nav />
        {children}
    </div>
}

export default DefaultLayout
