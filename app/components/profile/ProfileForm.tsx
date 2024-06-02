import Image from "next/image";
import Link from "next/link";
import styles from "./profileForm.module.css";
import defaultProfilePic from "../../../public/default_profile_pic.jpg";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function ProfileForm() {
    return (
        <div className={styles.profileForm}>
            <div className={styles.profilePic}>
                <div className={styles.profilePhoto}>
                    <Image 
                        src={defaultProfilePic}
                        alt="defaultProfilePic"
                    />
                    <div className={styles.profilePicText}>
                        <p className={styles.profilePicTitle}>Profile photo</p>
                        <p className={styles.profilePicSubTitle}>Required</p>
                    </div>
                </div>
                <div className={styles.uploadPic}>
                    <Link href="">
                        Upload Photo
                    </Link>
                </div>
            </div>
            <div>
                <div className={styles.userHandle}>
                    <div className={styles.label}>
                        <label>Your topmate page link</label>
                    </div>
                    <div className={styles.url}>
                        <div className={styles.prefixDiv}>{"topmate.io/"}</div>
                        <input className={styles.urlInput} placeholder="ajit_singh"></input>
                        <div className={styles.preview}>
                            <FaExternalLinkAlt />
                        </div>
                    </div>
                </div>
                <div className={styles.userName}>
                    <div className={styles.lastName}>
                        <div className={styles.label}>
                            <label>First Name</label>
                        </div>
                        <div className={styles.url}>
                            <input className={styles.urlInput} placeholder="ajay"></input>
                        </div>
                    </div>
                    <div className={styles.lastName}>
                        <div className={styles.label}>
                            <label>Last Name</label>
                        </div>
                        <div className={styles.url}>
                            <input className={styles.urlInput} placeholder="sharma"></input>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.displayName}>
                <div className={styles.label}>
                    <label>Disaplay Name</label>
                </div>
                <div className={styles.url}>
                    <input className={styles.urlInput} placeholder="ajay sharma"></input>
                </div>
            </div>
            <div className={styles.topmateIntro}>
                <div className={styles.label}>
                    <label>Your topmate intro (Required)</label>
                </div>
                <div className={styles.url}>
                    <input className={styles.urlInput} placeholder="this is the first thing people will see"></input>
                </div>
            </div>
            <div className={styles.about}>
                <div className={styles.label}>
                    <label>About yourself</label>
                </div>
                <div className={styles.url}>
                    <textarea rows={4} className={styles.urlInput}></textarea>
                </div>
            </div>
        </div>
    )
}