import Image from "next/image";
import Link from "next/link";
import Header from "../header/Header";
import styles from "./firstPage.module.css"
import mHB from "../../../public/mental-health-banner.svg";
import iLH from "../../../public/img-landing-hero-4.avif";
import iLHB from "../../../public/img-landing-hero-bg-4.svg";
import user1 from "../../../public/user-1.avif"
import user2 from "../../../public/user-2.avif"
import user3 from "../../../public/user-3.avif"
import user4 from "../../../public/user-4.avif"

export default function FirstPage() {
    return (<div className={styles.firstPage}>
        <Header />
        <div className={styles.container}>
            <div className={styles.left}>
                <div>
                    <Link href={""}>
                        <Image src={mHB} alt="mHB" />
                    </Link>
                </div>
                <h1>Start your <br /> <b>side hustle <br />today</b> </h1>
                <h2>Turn your passion and knowledge into a thriving business.
                <br />Help your audience get ahead in life</h2>
                <div className={styles.btns}>
                    <button className={styles.btnDark}>
                        <span>Start My Page</span>
                    </button>
                    <button>
                        Watch The Film
                    </button>
                </div>
                <div className={styles.feedback}>
                    <div>
                        <Image src={user1} alt="alt" />
                        <Image src={user2} alt="alt" />
                        <Image src={user3} alt="alt" />
                        <Image src={user4} alt="alt" />
                    </div>
                    <div className={styles.rating}>
                        <div className={styles.starRating}>
                            <div className={styles.star}></div>
                            <div className={styles.star}></div>
                            <div className={styles.star}></div>
                            <div className={styles.star}></div>
                            <div className={styles.star}></div>
                        </div>
                        <p>5/5 by 1000+ creators</p>
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <Image src={iLHB} alt="alt" />
                <Image className={styles.personImg} src={iLH} alt="alt" />
            </div>
        </div>
    </div>)
}