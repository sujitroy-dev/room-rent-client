import { useState } from "react";
import styles from "./Auth.module.scss";
import RegistierForm from "./RegistierForm/RegistierForm";
import LoginForm from "./LoginForm/LoginForm";

export default function AuthForm({open, setOpenFun}) {
  const [formType, setFormType] = useState("login"); // register || login || forgot-pw
  return (
    <>
      {open && (
        <>
          <div className={styles["form-bg"]} onClick={()=>setOpenFun(false)}/>
            {formType === "register" && <RegistierForm formType={formType} changeFormTypeFunc={setFormType}/>}
            {formType === "login" && <LoginForm formType={formType} changeFormTypeFunc={setFormType}/>}
        </>
      )}
    </>
  );
}
