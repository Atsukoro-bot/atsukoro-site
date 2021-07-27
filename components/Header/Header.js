import styles from "../../styles/header.module.css"
import 'react-tippy/dist/tippy.css'
import { Tooltip } from 'react-tippy';
import Link from 'next/link'
import { useRouter } from "next/router";
import Image from "next/image"


import logo from "../../public/images/logo.png"

export default function Header() {
    const router = useRouter();

    return (
        <nav className={styles.header}>
            <div className={styles.items}>
                <div className={styles.logo}>
                    <Image src={logo}/>
                </div>
                <ul>
                    <li className={router.pathname == "/" ? styles.active : ""}><Link href="/">Home</Link> </li>
                    <li className={router.pathname == "/commands" ? styles.active : ""}><Link href="/commands">Commands</Link> </li>
                    <Tooltip
                        title="Coming Soon™"
                        position="bottom"
                        trigger="mouseenter"
                    >
                        <li className={router.pathname == "/another" ? styles.active : ""}>Dashboard</li>
                    </Tooltip>
                </ul>
                    <Tooltip
                        title="Coming Soon™"
                        position="bottom"
                        trigger="mouseenter"
                    >
                        <div className={styles.login}>
                            Login
                        </div>
                    </Tooltip>
            </div>
        </nav>
    )
}