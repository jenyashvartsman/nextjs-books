import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <h3>Home</h3>
      <Link href="/dashboard">Go to Dashboard</Link>
    </div>
  );
}
