import { useSelector, useDispatch } from "react-redux";
import {
  showRegistierForm,
  showLoginForm,
} from "@/redux/features/layout/layoutSlice";
import { hideAuthForm } from "@/redux/features/layout/layoutSlice";
import LoginForm from "./Login";
import RegistierForm from "./Registration";
import { AnimatePresence } from "framer-motion";

interface state {
  layout: {
    authFormVisible: boolean;
    authFormType: string;
  };
}
export default function UserAuthModal() {
  const dispatch = useDispatch();
  const isAuthFormVisible: boolean = useSelector(
    (state: state) => state.layout.authFormVisible
  );
  const authFormType: string = useSelector(
    (state: state) => state.layout.authFormType
  );
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
              changeFormTypeFunc={() => dispatch(showLoginForm())}
            />
          )}
          {authFormType === "login" && (
            <LoginForm
              changeFormTypeFunc={() => dispatch(showRegistierForm())}
            />
          )}
        </div>
      )}
    </AnimatePresence>
  );
}
