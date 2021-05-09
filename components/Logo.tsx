import { FunctionComponent } from "react"
import s from "./Logo.module.scss"

const Logo: FunctionComponent = () => {
    return <span className={s.logo}>
        Coding Stuff.
        <img
            src="/images/blobs/logo-blob.svg"
            aria-hidden="true"
            className={s.logoBlob}
        />
    </span>
}

export default Logo
