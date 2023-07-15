import { use, useEffect, useReducer } from "react";
import { BsFillChatLeftDotsFill } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { IoMdSend } from "react-icons/io";
import token from "@/services/auth";
import Image from "next/image";
import { MdClose, MdOutlineArrowBackIosNew } from "react-icons/md";

export default function ChatModal() {
  const [state, dispatch] = useReducer(
    (state, action) => {
      if (action.type === "add_message") {
        return {
          ...state,
          messages: [...state.messages, action.payload],
        };
      } else if (action.type === "add_my_message") {
        if (state.messageInput === "") return state;
        return {
          ...state,
          messageInput: "",
          messages: [
            ...state.messages,
            {
              message: state.messageInput,
              isMe: true,
            },
          ],
        };
      } else if (action.type === "add_others_message") {
        if (action.payload.message === "") return state;
        return {
          ...state,
          messages: [
            ...state.messages,
            {
              message: state.messageInput,
              isMe: false,
            },
          ],
        };
      } else if (action.type === "type_message_inptu") {
        return {
          ...state,
          messageInput: action.payload,
        };
      } else if (action.type === "toggle_open") {
        return {
          ...state,
          isModalOpen: action.payload,
        };
      } else if (action.type === "toggle_open") {
        return {
          ...state,
          isModalOpen: action.payload,
        };
      } else if (action.type === "update_login") {
        return {
          ...state,
          isLoggedIn: action.payload,
        };
      } else if (action.type === "change_screen") {
        return {
          ...state,
          screen: action.payload,
        };
      } else if (action.type === "select_user") {
        return {
          ...state,
          selectedUser: action.payload,
        };
      } else if (action.type === "clear_selected_user") {
        return {
          ...state,
          selectedUser: {
            ...state.selectedUser,
            name: "All Chat",
          },
        };
      } else {
        return state;
      }
    },
    {
      isLoggedIn: false,
      isModalOpen: true, // todo: make it false
      screen: "users", // options: users, messages
      messageInput: "",
      messages: [],
      users: [
        {
          id: 1,
          name: "Rajiv Gupta",
          profile:
            "https://res.cloudinary.com/doy9gcs3y/image/upload/v1681408017/icons/javascript-svgrepo-com-2_u9copz.svg",
          lastMessage: "Hey what's up ?",
          time: "10 Days ago",
        },
        {
          id: 2,
          name: "Sujit Roy",
          profile:
            "https://res.cloudinary.com/doy9gcs3y/image/upload/v1681144363/profile_csaemb.webp",
          lastMessage: "Hey what's up ?",
          time: "10 Days ago",
        },
        {
          id: 3,
          name: "Saurab Das",
          profile: "",
          lastMessage: "Hey what's up ?",
          time: "10 Days ago",
        },
      ],
      selectedUser: {
        name: "All Chat",
      },
    }
  );

  useEffect(() => {
    if (token) return dispatch({ type: "update_login", payload: true });
    return dispatch({ type: "update_login", payload: false });
  }, [token]);

  return (
    <div
      className={`fixed bottom-8 right-8 z-[2001] flex items-end flex-col ${
        state.isLoggedIn ? "" : "hidden"
      }`}
    >
      <div
        className={`${
          state.isModalOpen ? "" : "hidden"
        } mb-4 bg-gray-100 rounded-lg p-4 shadow-lg w-[400px] h-[500px] flex flex-col`}
      >
        <header className="border-b border-gray-300 flex justify-start pb-2 mb-3 items-center gap-3">
          {state.screen !== "users" ? (
            <MdOutlineArrowBackIosNew
              fontSize={20}
              className="cursor-pointer"
              onClick={() => {
                dispatch({ type: "change_screen", payload: "users" });
                dispatch({ type: "clear_selected_user" });
              }}
            />
          ) : (
            <MdClose
              fontSize={20}
              className="cursor-pointer"
              onClick={() => {
                dispatch({ type: "toggle_open", payload: !state.isModalOpen });
              }}
            />
          )}
          <div className="">
            <h5 className="font-semibold">{state.selectedUser.name}</h5>
          </div>
        </header>
        <div
          className={`${
            state.screen === "messages" ? "" : "hidden"
          } flex-1 overflow-y-auto flex flex-col`}
        >
          <div className="flex flex-col gap-y-2 justify-end flex-1">
            {state.messages.map((message) => (
              <span
                key={message.message}
                className={`text-sm bg-gray-200 text-dark py-2 px-4 rounded-2xl ${
                  message.isMe ? "self-end" : "self-start"
                }`}
              >
                {message.message}
              </span>
            ))}
          </div>
        </div>
        <div
          className={`${
            state.screen === "users" ? "" : "hidden"
          } flex-1 overflow-y-auto`}
        >
          <div className="flex flex-col gap-y-2">
            {state.users.map((user) => (
              <div
                key={user.id}
                className="hover:bg-gray-200 p-3 rounded-lg flex gap-3 cursor-pointer"
                onClick={() => {
                  dispatch({ type: "change_screen", payload: "messages" });
                  dispatch({ type: "select_user", payload: user });
                }}
              >
                {user.profile === "" || !user.profile ? (
                  <div className="flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-500 rounded-full">
                    <span class="font-medium text-gray-200">
                      {user.name.split(" ").length > 1
                        ? `${user.name.split(" ")[0].split("")[0]}${
                            user.name
                              .split(" ")
                              [user.name.split(" ").length - 1].split("")[0]
                          }`
                        : user.name.split("")[0].toUpperCase()}
                    </span>
                  </div>
                ) : (
                  <Image
                    className="w-10 h-10 rounded-full"
                    src={user.profile}
                    width={100}
                    height={100}
                    alt={user.name}
                  />
                )}
                <div className="flex flex-col w-full">
                  <h4 className="text-sm font-medium text-gray-700">
                    {user.name}
                  </h4>
                  <p className="truncate text-xs fotn-medium text-gray-700">
                    {user.lastMessage}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <form
          className={`flex gap-3 mt-3 ${
            state.screen === "messages" ? "" : "hidden"
          }`}
          onSubmit={(e) => {
            e.preventDefault();
            dispatch({ type: "add_my_message" });
          }}
        >
          <input
            type="text"
            className="flex-1 rounded-lg shadow-sm px-2"
            value={state.messageInput}
            onChange={({ target }) =>
              dispatch({ type: "type_message_inptu", payload: target.value })
            }
          />
          <button className="bg-black text-white py-2 px-3 rounded-lg shadow-sm">
            <IoMdSend fontSize={18} />
          </button>
        </form>
      </div>
      <div
        className="p-4 rounded-lg cursor-pointer text-white bg-dark shadow-lg"
        onClick={() =>
          dispatch({ type: "toggle_open", payload: !state.isModalOpen })
        }
      >
        {!state.isModalOpen ? (
          <BsFillChatLeftDotsFill fontSize={26} />
        ) : (
          <RxCross2 fontSize={26} />
        )}
      </div>
    </div>
  );
}
