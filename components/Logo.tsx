import { FunctionComponent } from "react"
import Link from 'next/link'
import s from "./Logo.module.scss"

const Logo: FunctionComponent = () => {
    return (
        <Link href="/">
            <span className={s.logo}>
                Coding Stuff.
                <img
                    src="/images/blobs/logo-blob.svg"
                    aria-hidden="true"
                    className={s.logoBlob}
                />
            </span>
        </Link>
    )
}

export default Logo
