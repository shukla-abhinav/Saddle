"use client"

import styles from "./login.module.css"
import sIB from "../../../public/sign-in-back.svg"
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.svg";
import { useRouter } from "next/navigation";

export default function Login() {

    const router  = useRouter();

    // TODO - type fix
    const onLoginSubmit = (event: any) => {
        event.preventDefault();
        router.push("/dashboard");
    }

    return (
      <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.top}>
                <div className={styles.head}>
                    <Link href={"/"}>
                        <Image
                        src={logo}
                        alt="Picture of the author"
                        width={143}
                        />
                    </Link>
                    <Link href="/register">
                        <button>Create Account</button>
                    </Link>
                </div>
                <div className={styles.divider}></div>
            </div>
            <div className={styles.main}>
                <h2>Sign in</h2>
                <form className={styles.form}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email">Email</label>
                        <input name="email" type="email" className={styles.emailInp} placeholder="Email" />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="passowrd">Password</label>
                        <input name="passowrd" type="password" className={styles.passwordInp} placeholder="Password" />
                    </div>
                    <button onClick={(event) => onLoginSubmit(event)}>Sign-in</button>
                </form>
            </div>
            <div className={styles.bottom}>
                <div className={styles.divider}></div>
                <Link href={""}>Forgot Password</Link>
            </div>
        </div>
        <div className={styles.right}>
            <Image src={sIB} alt="sign in" />
        </div>
      </div>
    );
  }