"use client"

import Image from "next/image"
import Link from "next/link"
import styles from "./sidebar.module.css"
import logo from "../../../public/logo.svg";
import { sidebarData } from "./utlis";
import { usePathname } from 'next/navigation'
import defaultProfilePic from "../../../public/default_profile_pic.jpg";
import { MdArrowOutward } from "react-icons/md";

export default function Sidebar() {
    const pathname  = usePathname();

    console.log("pathname", pathname);
    return (
        <aside className={styles.sidebar}>
            <div>
                <Link href={"/"}>
                    <Image
                        src={logo}
                        alt="Picture of the author"
                        width={143}
                    />
                </Link>
                <div className={styles.divider}></div>
                <ul className={styles.sidebarLinks}>
                    {sidebarData.map((d) => {
                        return <li key={d._id}>
                            <Link className={`${styles.linkItem} ${d.path === pathname && styles.activeLinkItem}`} href={d.path} >
                                {d.image}
                                <span>{d.name}</span>
                            </Link>
                        </li>
                    })}
                </ul>
                <div className={styles.footer}>
                    <Link className={styles.footerLink} href="/dashboard/profile">
                        <Image
                            src={defaultProfilePic}
                            className={styles.profileImg}
                            alt="Picture of the author"
                            width={40}
                        />
                        <div className={styles.footerText}>
                            <span>Edit</span>
                            <MdArrowOutward />
                        </div>
                    </Link>
                </div>
            </div>
            
        </aside>
    )
}