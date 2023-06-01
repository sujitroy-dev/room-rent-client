import { useState } from "react";
import styles from "./LoginForm.module.scss";
import { toast } from "react-toastify";
import { useDispatch } from 'react-redux'
import { hideAuthForm } from '@/redux/features/layout/layoutSlice.js'
import { useRouter } from "next/navigation";


export default function LoginForm({ changeFormTypeFunc }) {
  const router = useRouter();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatchGlob = useDispatch();
  const hideAuthFormFunc = () => dispatchGlob(hideAuthForm());

  const submitForm = async (url, formData) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();

      if (responseData.success) {
        localStorage.setItem("token", responseData.token);
        router.refresh();
        hideAuthFormFunc();
      }
      return toast.error(responseData.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  function submitLoginForm(event) {
    event.preventDefault();
    const url = `${process.env.API_BASE}/user/login`;

    submitForm(url, { email, password })
  }

  return (
    <div className={styles.form__container}>
      <h2>Login</h2>
      <form onSubmit={submitLoginForm}>
        <label className={`${styles["full-w-label"]}`}>
          Eamil :
          <input
            type="email"
            name="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className={`${styles["full-w-label"]}`}>
          Password :
          <input
            type="password"
            name="password"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit" className={`${styles["full-w-label"]}`}>
          Submit
        </button>
      </form>
      <p className={styles["more-actions"]}>
        Not Registered yet?{" "}
        <span onClick={() => changeFormTypeFunc("register")}>Register</span>
      </p>
    </div>
  );
}
