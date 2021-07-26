import styles from "../styles/header.module.css"
import Link from 'next/link'
import { useRouter } from "next/router";

export default function Header() {
    const router = useRouter();

    return (
        <nav className={styles.header}>
            <div className={styles.items}>
                <ul>
                    <li className={router.pathname == "/" ? styles.active : ""}><Link href="/">Home</Link> </li>
                    <li className={router.pathname == "/commands" ? styles.active : ""}><Link href="/commands">Commands</Link> </li>
                    <li className={router.pathname == "/dashboard" ? styles.active : ""}><Link href="/">Dashboard</Link> </li>
                </ul>
                <div className={styles.login}>
                    Login
                </div>
            </div>
        </nav>
    )
}