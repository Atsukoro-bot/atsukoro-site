import styles from "../../styles/header.module.css";
import "react-tippy/dist/tippy.css";
import { Tooltip } from "react-tippy";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

import logo from "../../public/images/logo.png";

const Header: React.FC<{}> = ({}) => {
  const router = useRouter();

  return (
    <nav className={styles.header}>
      <div className={styles.items}>
        <div className={styles.logo}>
          <Link href="/" passHref>
            <Image src={logo} alt="Logos" />
          </Link>
        </div>
        <ul>
          <li className={router.pathname == "/" ? styles.active : ""}>
            <Link href="/" passHref>
              Home
            </Link>{" "}
          </li>
          <li className={router.pathname == "/commands" ? styles.active : ""}>
            <Link href="/commands" passHref>
              Commands
            </Link>{" "}
          </li>
          <li className={router.pathname == "/support" ? styles.active : ""}>
            <Link href="https://discord.gg/2396PDsVYM" passHref>
              Support
            </Link>
          </li>
        </ul>
        <Tooltip title="Coming Soon™" position="bottom" trigger="mouseenter">
          <div className={styles.login}>Login</div>
        </Tooltip>
      </div>
    </nav>
  );
};

export default Header;
