import Image from "next/image";
import Link from "next/link";
import styles from "./homeHeader.module.css";
import { MdArrowOutward } from "react-icons/md";
import defaultProfilePic from "../../../public/default_profile_pic.jpg";
import { IoCopyOutline } from "react-icons/io5";

export default function HomeHeader() {
    return (
        <div className={styles.headerContainer}>
            <h2>Hi, ajay</h2>
            <div className={styles.hederRight}>
                    <Link className={styles.profileLink} href="/dashboard/profile">
                        <Image
                            src={defaultProfilePic}
                            className={styles.profileImg}
                            alt="Picture of the author"
                            width={40}
                        />
                        <div className={styles.profileText}>
                            <span>topmate.io/ajay_sharma16/</span>
                            <MdArrowOutward className={styles.linkBtn} />
                        </div>
                    </Link>
                <div className={styles.profileCopy}>
                    <IoCopyOutline className={styles.profileCopyIcon} />
                </div>
            </div>
        </div>
    )
}