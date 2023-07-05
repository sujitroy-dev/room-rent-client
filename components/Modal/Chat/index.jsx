import { useEffect, useReducer, useState } from "react";
import { BsFillChatLeftDotsFill } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdSend } from "react-icons/io";
import token from "@/services/auth";

export default function ChatModal() {
  const [isLoggedIn, setLoggedIn] = useState(null);

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
          open: action.payload,
        };
      } else if (action.type === "toggle_open") {
        return {
          ...state,
          open: action.payload,
        };
      } else {
        return state;
      }
    },
    {
      open: false,
      messageInput: "",
      messages: [],
    }
  );

  useEffect(() => {
    if (token) {
      return setLoggedIn(true);
    } else {
      return setLoggedIn(false);
    }
  }, [token]);

  if (!isLoggedIn) return <></>;
  return (
    <div className="fixed bottom-8 right-8 z-[2001] flex items-end flex-col">
      <div
        className={`${
          state.open ? "" : "hidden"
        } mb-4 bg-gray-100 rounded-lg p-4 shadow-lg w-[400px] h-[500px] flex flex-col`}
      >
        <header className="border-b border-gray-300 flex justify-end pb-2 mb-3">
          <RiMenu3Fill fontSize={20} />
        </header>
        <div className="flex flex-col gap-y-2 flex-1 justify-end">
          {state.messages.map((message) => (
            <span
              className={`bg-gray-200 text-dark text-sm py-2 px-4 rounded-full ${
                message.isMe ? "self-end" : "self-start"
              }`}
            >
              {message.message}
            </span>
          ))}
        </div>
        <form
          className="flex gap-3 mt-3"
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
        className="p-4 rounded-lg cursor-pointer text-white bg-dark mix-blend-overlay"
        onClick={() => dispatch({ type: "toggle_open", payload: !state.open })}
      >
        {!state.open ? (
          <BsFillChatLeftDotsFill fontSize={26} />
        ) : (
          <RxCross2 fontSize={26} />
        )}
      </div>
    </div>
  );
}
