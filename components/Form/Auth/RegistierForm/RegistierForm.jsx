"use client";
import styles from "./RegistierForm.module.scss";
import { useReducer } from "react";
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux'
import { hideAuthForm } from '@/redux/features/layout/layoutSlice.js'

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
    case "clear_form":
      return initialForm;
    default:
      return state;
  }
};
export default function RegistierForm({ changeFormTypeFunc }) {
  const [formState, dispatch] = useReducer(reducer, initialForm);
  const dispatchGlob = useDispatch();
  const hideAuthFormFunc = ()=>dispatchGlob(hideAuthForm());
  
  const submitForm = async (url, formData) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const responseData = await response.json();
      if(responseData.success) {
        hideAuthFormFunc();
        return toast.success("Registered Successfully");
      }
      toast.error(responseData.message)
      dispatch({ type: "clear_form"})
    } catch (error) {
      console.log(error);
    }
  };
  function submitRegistrationForm(event) {
    event.preventDefault();
    const url = `${process.env.API_BASE}/user/register`;
    submitForm(url, formState);
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
