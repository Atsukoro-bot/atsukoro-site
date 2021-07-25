import styles from "../styles/header.module.css"
import Link from 'next/link'

export default function Header() {
    return (
        <nav className={styles.header}>
            <div className="items">
                <Link href="/">aaa</Link>
                <ul>
                    <li><Link href="/commands">Commands</Link> </li>
                    <li><Link href="/">Dashboard</Link> </li>
                    <li className="widthl">
                    </li>
                </ul>
            </div>
        </nav>
    )
}