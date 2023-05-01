import React from "react";
import styles from "./Footer.module.scss";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      All Copyright &copy; are reserved {currentYear}
    </footer>
  );
}
