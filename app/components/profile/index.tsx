import ProfileHeader from "./profileHeader";
import styles from "./profile.module.css";
import ProfileForm from "./ProfileForm";

export default function Profile() {
    return <div className={styles.profile}>
        <ProfileHeader />
        <ProfileForm />
    </div>
}