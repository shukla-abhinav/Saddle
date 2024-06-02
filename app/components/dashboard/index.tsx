import HomeHeader from "./HomeHeader";
import styles from "./dashboard.module.css";
import DashboardMain from "./dashboardMain";

export default function Dashboard() {
    return (
        <div className={styles.dashboard}>
            <HomeHeader />
            <DashboardMain />
        </div>
    )
}