import styles from "./register.module.css"
import sUT from "../../../public/signup-tweet.svg"
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.svg";

export default function Login() {
    return (
        <div className={styles.register}>
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
                        <Link href="/login">
                            <button>Login</button>
                        </Link>
                    </div>
                    <div className={styles.divider}></div>
                </div>
                <div className={styles.main}>
                    <h2>Create your page</h2>
                    <p>Starting with topmate is easy, fast and free</p>
                    <form className={styles.form}>
                        <div className={styles.nameGroup}>
                            <div className={styles.inputGroup}>
                                <label htmlFor="fName">First Name</label>
                                <input name="fName" type="text" placeholder="First Name" />
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="lName">Last Name</label>
                                <input name="lName" type="text" placeholder="Last Name" />
                            </div>
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="email">Email</label>
                            <input name="email" type="email" placeholder="Email" />
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="passowrd">Password</label>
                            <input name="passowrd" type="password" placeholder="Password" />
                        </div>
                        <button>Sign-up</button>
                    </form>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.divider}></div>
                    <Link href={""}>Forgot Password</Link>
                </div>
            </div>
            <div className={styles.right}>
                <Image src={sUT} alt="sign up" />
            </div>
        </div>
    );
  }