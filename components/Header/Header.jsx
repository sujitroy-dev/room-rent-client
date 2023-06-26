"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { showRegistierForm, showLoginForm } from "@/redux/features/layout/layoutSlice.js";
import token from "@/services/auth";

export default function HeaderWithoutSearch() {
  const dispatch = useDispatch();
  const [isLoggedIn, setLoggedIn] = useState(null);
  const router = useRouter();
  
  useEffect(() => {
    if (token) {
      return setLoggedIn(true)
    }else{
      return setLoggedIn(false);
    }
  }, [token]);

  function logoutHandler() {
    Cookies.remove("token");
    localStorage.removeItem("token");
    router.refresh();
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
