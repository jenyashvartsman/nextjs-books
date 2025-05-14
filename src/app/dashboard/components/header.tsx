import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h3>Books App</h3>

      <div className={styles.header__nav}>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/dashboard/books">Books</Link>
        <Link href="/dashboard/authors">Authors</Link>
        <Link href="/dashboard/genres">Genres</Link>
        <span> | </span>
        <Link href="/">Back to home</Link>
      </div>
    </header>
  );
}
