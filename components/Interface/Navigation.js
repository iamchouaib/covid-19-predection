import { useContext } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

import myLogo from "../../public/github-logo.svg";
import menuIcon from "../../public/menu-icon.svg";
import globeIcon from "../../public/globe-icon.svg";

export default function Navigation() {
  const router = useRouter();

  return (
    <div className={styles.navigation}>
      <div className={styles["row--centered"]}>
        <Link href="/">
          <a>
            <div
              className={
                router.pathname == "/" ? styles.active : styles.sidebar__element
              }
            >
              <Image src={menuIcon} alt="" className={styles.sidebar__icon} />
            </div>
          </a>
        </Link>
        <Link href="/worldmap">
          <a>
            <div
              className={
                router.pathname == "/worldmap"
                  ? styles.active
                  : styles.sidebar__element
              }
            >
              <Image src={globeIcon} alt="" className={styles.sidebar__icon} />
            </div>
          </a>
        </Link>
        <p>Covid Pridetion Dashboard</p>
      </div>
      <a
        href="https://github.com/Noevenzahn/covid-19-dashboard"
        className={styles.githubLogo}
      >
        <Image src={myLogo} alt="" />
      </a>
    </div>
  );
}
