import { useState } from "react";
import styles from "./Auth.module.scss";
import RegistierForm from "./RegistierForm/RegistierForm";
import LoginForm from "./LoginForm/LoginForm";
import { useSelector, useDispatch } from 'react-redux'
import { hideAuthForm } from '@/redux/features/layout/layoutSlice.js'

export default function AuthForm() {
  const [formType, setFormType] = useState("login"); // register || login || forgot-pw
  const dispatch = useDispatch()
  const isAuthFormVisible = useSelector((state) => state.layout.authFormVisible)
  const hideAuthFormFunc = ()=>dispatch(hideAuthForm());
  console.log({isAuthFormVisible});
  return (
    <>
      {isAuthFormVisible && (
        <>
          <div className={styles["form-bg"]} onClick={hideAuthFormFunc}/>
            {formType === "register" && <RegistierForm formType={formType} changeFormTypeFunc={setFormType}/>}
            {formType === "login" && <LoginForm formType={formType} changeFormTypeFunc={setFormType}/>}
        </>
      )}
    </>
  );
}
