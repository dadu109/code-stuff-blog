import { FunctionComponent } from "react"
import s from "./GlassContainer.module.scss"

type Props = {
    styleName?: string
}

const GlassContainer: FunctionComponent<Props> = ({ children, styleName, ...props }) => {
    return (
        <div {...props} className={`${s.container} ${styleName}`} >
            {children}
        </div>
    )
}

export default GlassContainer
