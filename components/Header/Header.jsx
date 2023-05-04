import { useState, useEffect, useRef } from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import { GoSearch } from "react-icons/go";
import { AiFillHeart } from "react-icons/ai";
import { RiUser6Fill } from 'react-icons/ri';

export default function Header({search}) {
  const [searchValue, setSearchValue] = useState("");
  const isLoggedIn = false;
  const inputRef = useRef(null);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };
  const handleSlashKeyPress = (event) => {
    if (event.key === "/") {
      event.preventDefault();
      inputRef.current.focus();
    }
  };
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
  };
  useEffect(() => {
    document.addEventListener("keydown", handleSlashKeyPress);
    return () => {
      document.removeEventListener("keydown", handleSlashKeyPress);
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <Link href="/" className={styles.header__logo}>
          Room Rent
        </Link>
        <form
          className={`${styles.header__search} ${styles["header__search--desktop"]}`}
          onSubmit={handleSearchSubmit}
        >
          <input
            type="text"
            ref={inputRef}
            placeholder="search area name..."
            onChange={handleSearchChange}
          />
          <GoSearch
            size="25px"
            className={styles["search-icon"]}
            onClick={handleSearchSubmit}
          />
        </form>
        <div className={styles["cta-container"]}>
         {!isLoggedIn?<div className={styles["registier-login"]}>
            <Link href="/">Registier</Link>
            <span> / </span>
            <Link href="/">Login</Link>
          </div>:<RiUser6Fill size="41px" className={styles['user-icon']}/>}
          <Link href="/">
            <AiFillHeart size="25px" className={styles["wishlist-icon"]} />
          </Link>
        </div>
      </div>
      <div className={styles["header__search-wrapper"]}>
        <form
          className={`${styles.header__search} ${styles["header__search--tablet"]}`}
          onSubmit={handleSearchSubmit}
        >
          <input
            type="text"
            placeholder="search area name..."
            onChange={handleSearchChange}
          />
          <GoSearch
            size="25px"
            className={styles["search-icon"]}
            onClick={handleSearchSubmit}
          />
        </form>
        <Link href="/">
          <AiFillHeart size="25px" className={styles["wishlist-icon"]} />
        </Link>
      </div>
    </header>
  );
}
