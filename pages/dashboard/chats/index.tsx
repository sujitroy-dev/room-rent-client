import DashboardLayout from "@/layouts/Dashboard";
import { useState } from "react";

type userType = {
  id: number;
  name?: string;
  picture?: null | string;
  last_message?: string;
  last_message_time?: string;
};
export default function ChatPage() {
  const users = [
    {
      id: 1,
      name: "Curtis Collier",
      picture: null,
      last_message: "okay bye 👋🏻",
      last_message_time: "10:23 PM",
    },
    {
      id: 2,
      name: "Jack Greer",
      picture:
        "https://sujitroy.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofile.202d2904.webp&w=2048&q=75",
      last_message: "Hey, what's up! ",
      last_message_time: "10:23 PM",
    },
  ];
  const [selectedUser, setselectedUser] = useState<userType>({ id: 0 });
  function nameToChar(name: string | undefined): string {
    function firstChar(word: string = ""): string {
      return word.split("")[0] || "";
    }
    if (!name) return "";
    const nameArr = name.split(" ");
    return nameArr.length > 1
      ? firstChar(nameArr[0]) + firstChar(nameArr[nameArr.length - 1])
      : firstChar(nameArr[0]);
  }
  return (
    <DashboardLayout>
      <div className="w-full h-full flex">
        <div className="w-96 h-screen px-5 py-4 bg-slate-100 overflow-hidden flex flex-col">
          <h2 className="text-xl font-semibold mb-5">All Chats</h2>
          <ul className="flex flex-col gap-2 overflow-y-auto">
            {users.map((user) => (
              <li
                key={user.id}
                className={`py-3 px-4 rounded-lg flex items-center justify-center transition-all duration-200 cursor-pointer ${
                  user.id === selectedUser.id ? "bg-slate-50 shadow-md" : ""
                }`}
                onClick={() => setselectedUser(user)}
              >
                <div>
                  {user.picture ? (
                    <img
                      className="w-12 h-12 rounded-full overflow-hidden mr-3"
                      src={user.picture}
                      alt=""
                    />
                  ) : (
                    <span className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center font-semibold text-lg bg-purple-200 text-purple-600 mr-3 uppercase">
                      {nameToChar(user.name)}
                    </span>
                  )}
                </div>
                <div className="flex-1">
                  <h5 className="font-medium text-slate-700">{user.name}</h5>
                  <p className="text-sm text-slate-500">
                    {user.last_message} ...
                  </p>
                </div>
                <div className="text-sm text-slate-500 self-start">
                  {user.last_message_time}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={"flex-1 bg-slate-50"}>
          {selectedUser.id === 0 ? (
            <div className="flex flex-col text-center gap-4">
              <h1 className="text-6xl font-semibold text-slate-300 mt-80">
                Chat Preview
              </h1>
              <p className="text-slate-400 text-lg">
                Select a message to preview
              </p>
            </div>
          ) : (
            <div className="h-screen flex flex-col overflow-hidden">
              <header className="py-4 px-8 shadow-md w-full overflow-x-hidden flex gap-4 items-center">
                {selectedUser.picture ? (
                  <img
                    className="w-12 h-12 rounded-full overflow-hidden"
                    src={selectedUser.picture}
                    alt=""
                  />
                ) : (
                  <span className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center font-semibold text-lg bg-purple-200 text-purple-600 uppercase">
                    {nameToChar(selectedUser.name)}
                  </span>
                )}
                <div className="flex flex-col">
                  <h3 className="text-lg font-medium text-slate-700">
                    {selectedUser.name}
                  </h3>
                </div>
              </header>
              <div className="flex-1 overflow-y-auto"></div>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
