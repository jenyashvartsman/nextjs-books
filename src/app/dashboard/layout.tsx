import styles from "./layout.module.css";
import Header from "./components/header";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboard__header}>
        <Header />
      </div>

      <main className={styles.dashboard__main}>{children}</main>
    </div>
  );
}
