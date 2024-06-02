"use client";

import Image from "next/image"
import Link from "next/link"
import styles from "./document-upload.module.css"
import logo from "../../../public/logo.svg";
import { useRouter } from "next/navigation";

export default function DocumentUpload() {
    const router = useRouter();

    const onNextClick = (event: any) => {
        event.preventDefault();
        router.push("/dashboard");
    }

    return (
        <div className={styles.documentUpload}>
            <div className={styles.head}>
                <Link href={"/"}>
                    <Image
                        src={logo}
                        alt="Picture of the author"
                        width={143}
                    />
                </Link>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.container}>
                <div className={styles.main}>
                    <h2 className={styles.heading}>Hello there!</h2>
                    <p className={styles.subHeading}>In a few moments you will be ready to share your expertise & time</p>
                    <div>
                        <div className={styles.label}>
                            <label>Connect your social account</label>
                        </div>
                        <div className={styles.url}>
                            <div className={styles.prefixDiv}>{"https://"}</div>
                            <input className={styles.urlInput} placeholder="LinkedIn, Twitter, Instagram"></input>
                        </div>
                    </div>
                    <div className={styles.userHandle}>
                        <div className={styles.label}>
                            <label>Your topmate page link</label>
                        </div>
                        <div className={styles.url}>
                            <div className={styles.prefixDiv}>{"topmate.io/"}</div>
                            <input className={styles.urlInput} placeholder="ajit_singh"></input>
                        </div>
                    </div>
                    <div className={styles.designation}>
                        <div className={styles.label}>
                            <label>Designation</label>
                        </div>
                        <div className={styles.url}>
                            <input className={styles.urlInput} placeholder="SDE 1"></input>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                <button onClick={onNextClick}>Next</button>
            </div>
        </div>
    )
}