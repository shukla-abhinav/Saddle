import Image from "next/image";
import styles from "./dashboardMain.module.css";
import noNotifications from "../../../public/no-notifications.svg";
import oneBa6vjt from "../../../public/one_ba6vjt.avif";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import { cardHelpData } from "./utils";

export default function DashboardMain() {
    return (
        <div className={styles.dashboardMain}>
            <div className={styles.firstSection}>
                <div className={styles.carouselContainer}>
                    <div className={styles.carousel}>
                        <div>
                            <Image 
                                src={oneBa6vjt}
                                alt="oneBa6vjt"
                            />
                        </div>
                        <div className={styles.rightSide}>
                            <h2>Welcome to the Zero Day</h2>
                            <p>Enjoy a day free of commission on all the bookings you get</p>
                            <div className={styles.arrowContainer}>
                                <FaArrowRightLong />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.booking}>
                    <p>New Bookings</p>
                    <Image
                        src={noNotifications}
                        alt="noNotifications"
                    />
                </div>
            </div>
            <div className={styles.secondSection}>
                <div className={styles.secondSectionHead}>
                    <h2>Need Some Help ?</h2>
                </div>
                <div className={styles.cardSection}>
                    { cardHelpData.map((d) => {
                        return (
                            <div key={d.title} className={styles.card}>
                                <div className={styles.head}>
                                    <Image 
                                        src={d.img}
                                        alt="HelpCenter"
                                    />
                                </div>
                                <div className={styles.cardMain}>
                                    <p className={styles.cardtTitle}>{d.title}</p>
                                    <Link 
                                        href=""
                                    >
                                        {d.urlText}
                                    </Link>
                                    <p className={styles.cardtSubTitle}>{d.subTitle}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}