import Image from 'next/image'
import Link from 'next/link';
import logo from "../../../public/logo.svg";
import styles from "./header.module.css"

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
          <div className={styles.leftHeader}>
            <Link href={""}>
            <Image
              src={logo}
              alt="Picture of the author"
            />
            </Link>
            <ul className={ styles.publicMenuLinks}>
              <li className={styles.link}>
                <Link href={""} className={ styles.publicMenuLink }>For Creators</Link>
              </li>
              <li className={styles.link}>
                <Link href={""} className={ styles.publicMenuLink }>Pricing</Link>
              </li>
              <li className={styles.link}>
                <Link href={""} className={ styles.publicMenuLink }>Earning Calculator</Link>
              </li>
            </ul>
          </div>
          <div className={styles.rightHeader}>
            <Link href={"/login"}>
              <button className={styles.loginBtn}>Log in</button>
            </Link>
            <Link href={"/register"}>
              <button className={styles.signUpBtn}>Sign up free</button>
            </Link>
          </div>
      </div>
    </header>
  );
  }