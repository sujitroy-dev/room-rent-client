import DashboardLayout from "@/layouts/Dashboard";
import { useState } from "react";

export default function ChatPage() {
  const users = [
    {
      id: 1,
      name: "Curtis Collier",
      picture: null,
      last_mesage: "okay bye 👋🏻",
      last_message_time: "10:23 PM",
    },
    {
      id: 2,
      name: "Jack Greer",
      picture: null,
      last_mesage: "Hey, what's up! ",
      last_message_time: "10:23 PM",
    },
  ];
  const [selectedUser, setselectedUser] = useState<string>("");
  return (
    <DashboardLayout>
      <div className="w-full h-full flex">
        <div className="w-96 h-screen px-5 py-4 bg-slate-200">
          <h2 className="text-xl font-semibold mb-5">All Chats</h2>
          <ul className="flex flex-col gap-2">
            {users.map((user) => (
              <li
                key={user.id}
                className={`py-3 px-4 rounded-lg flex items-center justify-center transition-all duration-200 cursor-pointer ${
                  user.name === selectedUser ? "bg-slate-100 shadow-sm" : ""
                }`}
                onClick={() => setselectedUser(user.name)}
              >
                <div className="">
                  {user.picture ? (
                    <img src="w-14 h-14 rounded-full overflow-hidden" alt="" />
                  ) : (
                    <span className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center font-semibold text-lg bg-purple-200 text-purple-600 mr-3">
                      JD
                    </span>
                  )}
                </div>
                <div className="flex-1">
                  <h5 className="font-medium text-slate-700">{user.name}</h5>
                  <p className="text-sm text-slate-500">
                    {user.last_mesage} ...
                  </p>
                </div>
                <div className="text-sm text-slate-500 self-start">
                  {user.last_message_time}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={"py-4 px-6 flex-1 bg-slate-100"}>
          {selectedUser === "" ? (
            <div className="flex flex-col text-center gap-4">
              <h1 className="text-6xl font-semibold text-slate-300 mt-80">
                Chat Preview
              </h1>
              <p className="text-slate-400 text-lg">
                Select a message to preview
              </p>
            </div>
          ) : (
            selectedUser
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
