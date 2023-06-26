import styles from "./Auth.module.scss";
import RegistierForm from "./RegistierForm/RegistierForm";
import LoginForm from "./LoginForm/LoginForm";
import { useSelector, useDispatch } from 'react-redux'
import { hideAuthForm } from '@/redux/features/layout/layoutSlice.js'
import { showRegistierForm, showLoginForm } from "@/redux/features/layout/layoutSlice.js";

export default function AuthForm() {
  const dispatch = useDispatch()
  const isAuthFormVisible = useSelector((state) => state.layout.authFormVisible)
  const authFormType = useSelector((state) => state.layout.authFormType)
  const hideAuthFormFunc = ()=>dispatch(hideAuthForm());
  
  return (
    <>
      {isAuthFormVisible && (
        <>
          <div className={styles["form-bg"]} onClick={hideAuthFormFunc}/>
            {authFormType === "register" && <RegistierForm formType={authFormType} changeFormTypeFunc={()=>dispatch(showLoginForm())}/>}
            {authFormType === "login" && <LoginForm formType={authFormType} changeFormTypeFunc={()=>dispatch(showRegistierForm())}/>}
        </>
      )}
    </>
  );
}
