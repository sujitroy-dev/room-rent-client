"use client";
import styles from "./Header.module.scss";
import Link from "next/link";
import { AiFillHeart } from "react-icons/ai";
import { RiUser6Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { makeAuthFormVisible } from "@/redux/features/layout/layoutSlice.js";
import { useEffect, useState } from "react";
import { GoSearch } from "react-icons/go";

export default function HeaderWithoutSearch() {
  const dispatch = useDispatch();
  const showAuthFormFunc = () => dispatch(makeAuthFormVisible());
  const [isLoggedIn, setLoggedIn] = useState(null);

  useEffect(() => {
    let isLoggedIn = localStorage.getItem("token");

    if (isLoggedIn) {
      return setLoggedIn(true);
    } else {
      return setLoggedIn(false);
    }
  }, []);

  function handleSearchSubmit() {
    e.preventDefault();
  }

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.header__wrapper}>
          <Link href="/" className={styles.header__logo}>
            Room Rent
          </Link>
          <form className={styles.header__search} onSubmit={handleSearchSubmit}>
            <input type="text" placeholder="Search..." />
            <button>
              <GoSearch size="25px" className={styles["search-icon"]} />
            </button>
          </form>
          <div className={styles["cta-container"]}>
            <Link href="/">
              <AiFillHeart size="25px" className={styles["wishlist-icon"]} />
            </Link>
            {!isLoggedIn ? (
              <div
                className={styles["registier-login"]}
                onClick={showAuthFormFunc}
              >
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
