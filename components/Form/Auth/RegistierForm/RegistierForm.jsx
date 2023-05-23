"use client";
import styles from "./RegistierForm.module.scss";
import { useReducer } from "react";
const initialForm = {
  name: "",
  email: "",
  password: "",
  user_type: "customer",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "update_name":
      return { ...state, name: action.payload };
    case "update_email":
      return { ...state, email: action.payload };
    case "update_password":
      return { ...state, password: action.payload };
    case "update_account_type":
      return { ...state, user_type: action.payload };
    case "claer_form":
      return {
        name: "",
        email: "",
        password: "",
        user_type: "customer",
      };
    default:
      return state;
  }
};
const submitForm = async (url, formData) => {
  try {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  } catch (error) {
    console.log(error);
  }
};
export default function RegistierForm({ changeFormTypeFunc }) {
  const [formState, dispatch] = useReducer(reducer, initialForm);

  function submitRegistrationForm(event) {
    event.preventDefault();
    const url = `${process.env.API_BASE}/user/register`;
    submitForm(url, formState);
    // dispatch({type: 'claer_form'})
  }

  return (
      <div className={styles.form__container}>
        <h2>Register</h2>
        <form onSubmit={submitRegistrationForm}>
          <label className={`${styles["full-w-label"]}`}>
            Full Name :
            <input
              type="text"
              name="input_name"
              id="input_name"
              required
              value={formState.name}
              onChange={(e) =>
                dispatch({ type: "update_name", payload: e.target.value })
              }
            />
          </label>
          <label className={`${styles["full-w-label"]}`}>
            Eamil :
            <input
              type="email"
              name="input_email"
              id="input_email"
              required
              value={formState.email}
              onChange={(e) =>
                dispatch({ type: "update_email", payload: e.target.value })
              }
            />
          </label>
          <label className={`${styles["full-w-label"]}`}>
            Password :
            <input
              type="password"
              name="input_password"
              id="input_password"
              required
              value={formState.password}
              onChange={(e) =>
                dispatch({ type: "update_password", payload: e.target.value })
              }
            />
          </label>
          <label className={`${styles["full-w-label"]}`}>
            Selete Account Type :
            <select
              value={formState.user_type}
              onChange={(e) =>
                dispatch({
                  type: "update_account_type",
                  payload: e.target.value,
                })
              }
            >
              <option value="customer">Customer</option>
              <option value="landlord">Landlord</option>
              <option value="agent">Agent</option>
            </select>
          </label>
          <button type="submit" className={`${styles["full-w-label"]}`}>
            Submit
          </button>
        </form>
        <p className={styles["more-actions"]}>
          Already Registiered?{" "}
          <span onClick={() => changeFormTypeFunc("login")}>Login</span>
        </p>
      </div>
  );
}
