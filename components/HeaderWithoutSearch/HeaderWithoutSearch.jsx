import styles from "./HeaderWithoutSearch.module.scss";
import Link from "next/link";
import { GoSearch } from "react-icons/go";
import { AiFillHeart } from "react-icons/ai";
import { RiUser6Fill } from "react-icons/ri";

export default function HeaderWithoutSearch({showLoginFunc}) {
  const isLoggedIn = false;

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.header__wrapper}>
          <Link href="/" className={styles.header__logo}>
            Room Rent
          </Link>
          <div className={styles["cta-container"]}>
            <Link href="/">
              <AiFillHeart size="25px" className={styles["wishlist-icon"]} />
            </Link>
            {!isLoggedIn ? (
              <div className={styles["registier-login"]} onClick={showLoginFunc}>
                Login
              </div>
            ) : (
              <RiUser6Fill size="41px" className={styles["user-icon"]} />
            )}
          </div>
        </div>
      </header>
    </div>
  );
}
