import RegistierForm from "./RegistierForm/RegistierForm";
import LoginForm from "./LoginForm/LoginForm";
import { useSelector, useDispatch } from "react-redux";
import { hideAuthForm } from "@/redux/features/layout/layoutSlice.js";
import {
  showRegistierForm,
  showLoginForm,
} from "@/redux/features/layout/layoutSlice.js";
import { AnimatePresence } from "framer-motion";

export default function AuthForm() {
  const dispatch = useDispatch();
  const isAuthFormVisible = useSelector(
    (state) => state.layout.authFormVisible
  );
  const authFormType = useSelector((state) => state.layout.authFormType);
  const hideAuthFormFunc = () => dispatch(hideAuthForm());

  return (
    <AnimatePresence>
      {isAuthFormVisible && (
        <div className="w-screen h-screen fixed top-0 left-0 z-[20000]">
          <div
            className="w-full h-full absolute top-0 left-0 bg-gray-600/70 z-[2000]"
            onClick={hideAuthFormFunc}
          />
          {authFormType === "register" && (
            <RegistierForm
              formType={authFormType}
              changeFormTypeFunc={() => dispatch(showLoginForm())}
            />
          )}
          {authFormType === "login" && (
            <LoginForm
              formType={authFormType}
              changeFormTypeFunc={() => dispatch(showRegistierForm())}
            />
          )}
        </div>
      )}
    </AnimatePresence>
  );
}
