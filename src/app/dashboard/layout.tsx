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
        <div className={styles.dashboard__headerInner}>
          <Header />
        </div>
      </div>

      <main className={styles.dashboard__main}>{children}</main>
    </div>
  );
}
