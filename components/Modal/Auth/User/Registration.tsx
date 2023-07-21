"use client";
import { FormEvent, useReducer } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { hideAuthForm } from "@/redux/features/layout/layoutSlice";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { motion } from "framer-motion";

interface State {
  name: string;
  email: string;
  password: string;
  user_type: string;
}
interface Action {
  type: string;
  payload?: any;
}
interface Props {
  changeFormTypeFunc: () => void;
}

const initialForm: State = {
  name: "",
  email: "",
  password: "",
  user_type: "customer",
};
const reducer = (state: State, action: Action) => {
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
export default function RegistrationModal({ changeFormTypeFunc }: Props) {
  const router = useRouter();

  const [formState, dispatch] = useReducer(reducer, initialForm);
  const dispatchGlob = useDispatch();
  const hideAuthFormFunc = () => dispatchGlob(hideAuthForm());

  const submitForm = async () => {
    const url = `${process.env.API_BASE}/user/register`;
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });
      const responseData = await response.json();
      if (responseData.success) {
        Cookies.set("token", responseData.token);
        hideAuthFormFunc();
        return router.refresh();
      }
      dispatch({ type: "clear_form" });
      return toast.error(responseData.message);
    } catch (error) {
      console.log(error);
    }
  };
  const submitRegistrationForm = (e: FormEvent) => {
    e.preventDefault();
    submitForm();
  };

  return (
    <motion.div
      className="relative z-[2001] w-[480px] bg-white p-8 rounded-md m-auto mt-36"
      initial={{
        opacity: 0,
        scale: 0.75,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: {
          ease: "easeOut",
          duration: 0.15,
        },
      }}
      exit={{
        opacity: 0,
        scale: 0.75,
        transition: {
          ease: "easeIn",
          duration: 0.15,
        },
      }}
    >
      <h2 className="text-4xl font-semibold text-center mb-6">Register</h2>
      <form
        onSubmit={submitRegistrationForm}
        className="grid grid-cols-1 gap-4"
      >
        <label className="flex flex-col gap-1">
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
            className="p-3 bg-gray-100 rounded-md border border-light-gray"
          />
        </label>
        <label className="flex flex-col gap-1">
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
            className="p-3 bg-gray-100 rounded-md border border-light-gray"
          />
        </label>
        <label className="flex flex-col gap-1">
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
            className="p-3 bg-gray-100 rounded-md border border-light-gray"
          />
        </label>
        <label className="flex flex-col gap-1">
          Selete Account Type :
          <select
            value={formState.user_type}
            onChange={(e) =>
              dispatch({
                type: "update_account_type",
                payload: e.target.value,
              })
            }
            className="p-3 bg-gray-100 rounded-md border border-light-gray"
          >
            <option value="customer">Customer</option>
            <option value="landlord">Landlord</option>
            <option value="agent">Agent</option>
          </select>
        </label>
        <button
          type="submit"
          className="font-medium bg-black text-white py-3 px-6 rounded-md mt-3 mb-8"
        >
          Submit
        </button>
      </form>
      <p className="text-center">
        Already Registiered?{" "}
        <span
          className="font-medium underline"
          onClick={() => changeFormTypeFunc()}
        >
          Login
        </span>
      </p>
    </motion.div>
  );
}
