import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { useRouter as NavigationRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function DashboardSidebar() {
  const { pathname } = useRouter();
  const router = NavigationRouter();

  function logoutHandler() {
    Cookies.remove("token");
    localStorage.removeItem("token");
    router.replace("/");
  }

  const navigations = [
    {
      title: "Listings",
      path: "/dashboard",
    },
    {
      title: "Chats",
      path: "/dashboard/chats",
    },
  ];

  return (
    <div className="w-80 h-screen px-5 py-4 bg-slate-800 overflow-y-auto flex flex-col">
      <Link
        href="/"
        className="block mb-6 text-3xl font-semibold text-slate-200"
      >
        Room Rent
      </Link>
      <ul className="flex flex-col gap-2 flex-1">
        {navigations.map((item) => (
          <li key={item.title}>
            <Link
              href={item.path}
              className={`block p-4 rounded-md font-medium ${
                pathname === item.path
                  ? "bg-slate-50 text-dark"
                  : "text-slate-200"
              } hover:bg-slate-50 hover:text-dark transition-all duration-200`}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <button
        className="p-4 rounded-md font-medium border-2 border-slate-200 text-slate-200 hover:border-white hover:bg-white hover:text-dark"
        tabIndex={1}
        onClick={logoutHandler}
      >
        Logout
      </button>
    </div>
  );
}
