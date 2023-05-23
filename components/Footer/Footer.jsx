import React from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";
import { HiPhone, HiOutlineMail } from "react-icons/hi";
import { MdLocationPin } from 'react-icons/md';
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__top}>
        <div className={styles.footer__top__col}>
          <div className={styles.footer__logo}>Room Rent</div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi,
            quibusdam, itaque dolores odio quidem modi eos nihil nulla doloribus
            cumque sint quas amet laudantium ducimus dolorum cupiditate
            obcaecati officiis aut?
          </p>
        </div>
        <div className={styles.footer__top__col}>
          <h6 className={styles.footer__title}>About</h6>
          <ul className={styles.footer__top__col__items}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">About Us</Link>
            </li>
            <li>
              <Link href="/">Rooms</Link>
            </li>
            <li>
              <Link href="/">FAQ</Link>
            </li>
            <li>
              <Link href="/">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className={styles.footer__top__col}>
          <h6 className={styles.footer__title}>Connect with us</h6>
          <ul className={styles.footer__top__col__items}>
            <li>
              <Link href="/">
                <HiPhone size={18} /> +91 777-888-9152
              </Link>
            </li>
            <li>
              <Link href="/">
                <HiOutlineMail size={18} /> support@room-rent.com
              </Link>
            </li>
            <li>
              <Link href="/">
                <MdLocationPin size={18} /> Location will be here
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footer__bottom}>
        All Copyright &copy; are reserved {currentYear}
      </div>
    </footer>
  );
}
