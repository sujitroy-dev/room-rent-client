import React, { FC, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { hideAuthForm } from "@/redux/features/layout/layoutSlice";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { motion } from "framer-motion";

interface Props {
  changeFormTypeFunc: () => void;
}

const LoginModal: FC<Props> = ({ changeFormTypeFunc }) => {
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatchGlob = useDispatch();
  const hideAuthFormFunc = () => dispatchGlob(hideAuthForm());

  interface loginCredentials {
    email: string;
    password: string;
  }

  const submitForm = async (url: string, formData: loginCredentials) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();

      if (responseData.success) {
        Cookies.set("token", responseData.token);
        router.refresh();
        return hideAuthFormFunc();
      }
      return toast.error(responseData.message);
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  function submitLoginForm(event: React.FormEvent) {
    event.preventDefault();
    const url = `${process.env.API_BASE}/user/login`;

    submitForm(url, { email, password });
  }

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
      <h2 className="text-4xl font-semibold text-center mb-6">Login</h2>
      <form onSubmit={submitLoginForm} className="grid grid-cols-1 gap-4">
        <label className="flex flex-col gap-1">
          Eamil :
          <input
            type="email"
            name="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 bg-gray-100 rounded-md border border-light-gray"
          />
        </label>
        <label className="flex flex-col gap-1">
          Password :
          <input
            type="password"
            name="password"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 bg-gray-100 rounded-md border border-light-gray"
          />
        </label>
        <button
          type="submit"
          className="font-medium bg-black text-white py-3 px-6 rounded-md mt-3 mb-8"
        >
          Submit
        </button>
      </form>
      <p className="text-center">
        Not Registered yet?{" "}
        <span
          className="font-medium underline"
          onClick={() => changeFormTypeFunc()}
        >
          Register
        </span>
      </p>
    </motion.div>
  );
};

export default LoginModal;
