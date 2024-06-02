"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./profileHeader.module.css";

export default function ProfileHeader() {
    const pathName = usePathname();

    return (
        <div className={styles.profile}>
            <h2>Profile</h2>
            <div className={styles.profileActions}>
                <div className={styles.profileTabs}>
                    <Link 
                        className={pathName === "/dashboard/profile" ? styles.active : "" } 
                        href="/dashboard/profile"
                    >
                        Profile
                    </Link>
                    <Link 
                        className={pathName === "/dashboard/profile/setting" ? styles.active : "" } 
                        href="/dashboard/profile/setting"
                    >
                        Setting
                    </Link>
                    <Link 
                        className={pathName === "/dashboard/profile/account" ? styles.active : "" } 
                        href="/dashboard/profile/account"
                    >
                        Account
                    </Link>
                </div>
                <div className={styles.saveProfile}>
                    <button>Save Changes</button>
                </div>
            </div>
        </div>
    )
}