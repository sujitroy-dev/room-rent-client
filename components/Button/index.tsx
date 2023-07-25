import React, { ReactNode } from "react";

type Props = React.ComponentPropsWithoutRef<"button"> & {
  children: ReactNode;
  variant?: string;
};

export default function Button(Props: Props) {
  const { children, variant = "default" } = Props;

  return (
    <button
      className={
        variant === "default"
          ? "px-6 py-2 border-2 border-slate-800 bg-slate-800 hover:bg-slate-700 hover:border-slate-700 text-slate-100 rounded-lg flex items-center justify-center gap-2 outline-slate-800"
          : "px-6 py-2 border-2 border-slate-800 bg-slate-50 hover:bg-slate-100 rounded-lg outline-slate-800"
      }
      {...Props}
    >
      {children}
    </button>
  );
}
