"use client";

import Link from "next/link";
import styles from "./header.module.css";
import { usePathname } from "next/navigation";

const links: { href: string; label: string }[] = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/dashboard/books", label: "Books" },
  { href: "/dashboard/authors", label: "Authors" },
  { href: "/dashboard/genres", label: "Genres" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <h3 className={styles.header__appName}>Books App</h3>

      <div className={styles.header__nav}>
        {links.map((link) => (
          <Link
            className={
              styles.header__navLink +
              (pathname === link.href
                ? ` ${styles["header__navLink--active"]}`
                : "")
            }
            key={link.href}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
        <span> | </span>
        <Link className={styles.header__homeLink} href="/">
          Back to home
        </Link>
      </div>
    </header>
  );
}
