import DashboardLayout from "@/layouts/Dashboard";
import Image from "next/image";
import { FormEvent, useEffect, useRef, useState } from "react";
import { IoMdSend } from "react-icons/io";

type userType = {
  id: number | undefined;
  name: string;
  picture: null | string;
  last_message: string;
  last_message_time: string;
};
type chatType = {
  id: number;
  isMe: boolean;
  message: string;
};
export default function ChatPage() {
  const users = [
    {
      id: 7383,
      name: "Curtis Collier",
      picture: null,
      last_message: "okay bye 👋🏻",
      last_message_time: "10:23 PM",
    },
    {
      id: 6244,
      name: "Jack Greer",
      picture:
        "https://sujitroy.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofile.202d2904.webp&w=2048&q=75",
      last_message: "Hey, what's up!",
      last_message_time: "10:23 PM",
    },
  ];
  const messagesData = [
    {
      id: 3020,
      isMe: true,
      message: "Hey there!",
    },
    {
      id: 7871,
      isMe: true,
      message: "How are you doing?",
    },
    {
      id: 2204,
      isMe: false,
      message: "Hi! I'm doing great, thanks for asking. How about you?",
    },
    {
      id: 1555,
      isMe: true,
      message: "I'm good too, thanks. What have you been up to lately?",
    },
    {
      id: 6131,
      isMe: false,
      message:
        "Not much, just working on some projects and spending time with family.",
    },
    {
      id: 8265,
      isMe: false,
      message:
        "By the way, did you watch that new movie everyone's talking about?",
    },
    {
      id: 8897,
      isMe: true,
      message: "Yes, I did! It was fantastic! I highly recommend it.",
    },
    {
      id: 5188,
      isMe: true,
      message: "What about you? Did you get a chance to see it?",
    },
    {
      id: 8879,
      isMe: false,
      message: "Not yet, but I plan to watch it this weekend.",
    },
    {
      id: 8805,
      isMe: false,
      message: "Anyway, gotta go now. Talk to you later!",
    },
    {
      id: 7412,
      isMe: true,
      message: "Sure, take care.",
    },
    {
      id: 6004,
      isMe: true,
      message: "Talk to you later!",
    },
  ];

  // const messagesData = [
  //   {
  //     id: 3020,
  //     isMe: false,
  //     message: "Hey there!",
  //   },
  //   {
  //     id: 7871,
  //     isMe: false,
  //     message: "How are you doing?",
  //   },
  //   {
  //     id: 2204,
  //     isMe: true,
  //     message: "Hi! I'm doing great, thanks for asking. How about you?",
  //   },
  //   {
  //     id: 1555,
  //     isMe: false,
  //     message: "I'm good too, thanks. What have you been up to lately?",
  //   },
  //   {
  //     id: 6131,
  //     isMe: true,
  //     message:
  //       "Not much, just working on some projects and spending time with family.",
  //   },
  //   {
  //     id: 8265,
  //     isMe: true,
  //     message:
  //       "By the way, did you watch that new movie everyone's talking about?",
  //   },
  //   {
  //     id: 8897,
  //     isMe: false,
  //     message: "Yes, I did! It was fantastic! I highly recommend it.",
  //   },
  //   {
  //     id: 5188,
  //     isMe: false,
  //     message: "What about you? Did you get a chance to see it?",
  //   },
  //   {
  //     id: 8879,
  //     isMe: true,
  //     message: "Not yet, but I plan to watch it this weekend.",
  //   },
  //   {
  //     id: 8805,
  //     isMe: true,
  //     message: "Anyway, gotta go now. Talk to you later!",
  //   },
  //   {
  //     id: 7412,
  //     isMe: false,
  //     message: "Sure, take care.",
  //   },
  //   {
  //     id: 6004,
  //     isMe: false,
  //     message: "Talk to you later!",
  //   },
  // ];

  const [selectedUser, setselectedUser] = useState<userType | undefined>();
  const [inputMessage, setInputMessage] = useState<string>("");
  const [messages, setMessages] = useState<chatType[]>(messagesData);
  const messageContainerRef = useRef<null | HTMLUListElement>(null);

  function scrollToBottom() {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  }

  useEffect(() => {
    scrollToBottom();
  }, [selectedUser?.id]);

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

  async function sendMessage(e: FormEvent) {
    e.preventDefault();
    if (inputMessage === "") return;
    const newMessageId = (messages[messages.length - 1]?.id || 0) + 1; // increment by one with the last message id
    await setMessages(() => [
      ...messages,
      { id: newMessageId, isMe: true, message: inputMessage },
    ]);
    await setInputMessage("");
    scrollToBottom();
  }

  return (
    <DashboardLayout>
      <div className="w-full h-full flex">
        <div className="w-96 h-screen px-5 py-4 bg-slate-100 overflow-hidden flex flex-col">
          <h2 className="text-xl font-semibold mb-5">All Chats</h2>
          <ul className="flex flex-col gap-2 overflow-y-auto flex-1">
            {users.map((user) => (
              <li
                key={user.id}
                className={`w-full py-3 px-4 rounded-lg flex items-center justify-center transition-all duration-200 cursor-pointer ${
                  user.id === selectedUser?.id ? "bg-slate-50 shadow-md" : ""
                }`}
                onClick={() => setselectedUser(user)}
              >
                {user.picture ? (
                  <Image
                    className="w-12 h-12 rounded-full overflow-hidden mr-3"
                    src={user.picture}
                    alt=""
                    width={48}
                    height={48}
                  />
                ) : (
                  <span className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center font-semibold text-lg bg-purple-200 text-purple-600 mr-3 uppercase">
                    {nameToChar(user.name)}
                  </span>
                )}
                <div className="flex-1 w-full overflow-hidden">
                  <h5 className="font-medium text-slate-700">{user.name}</h5>
                  <p className="text-sm text-slate-500 truncate">
                    {user.last_message}
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
          {!selectedUser?.id ? (
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
              <header className="py-4 px-8 shadow-md w-full overflow-x-hidden flex gap-4 items-center bg-white">
                {selectedUser.picture ? (
                  <Image
                    className="w-12 h-12 rounded-full overflow-hidden"
                    src={selectedUser.picture}
                    alt=""
                    width={48}
                    height={48}
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
              <ul
                className="flex-1 overflow-y-auto p-4 flex flex-col gap-y-1 scroll-smooth"
                ref={messageContainerRef}
              >
                {messages.map((message, index) => (
                  <li
                    key={message.id}
                    className={`bg-slate-200 px-4 py-3 text-slate-800 
                    ${message.isMe ? "rounded-s-3xl" : "rounded-e-3xl"}
                    max-w-[45%] ${message.isMe ? "self-end" : "self-start"}
                    ${
                      !message.isMe && !messages[index - 1]?.isMe
                        ? "rounded-tl-sm"
                        : "rounded-tl-3xl"
                    }
                    ${
                      message.isMe && messages[index - 1]?.isMe
                        ? "rounded-tr-sm"
                        : "rounded-tr-3xl"
                    }
                    ${
                      !message.isMe && !messages[index + 1]?.isMe
                        ? "rounded-bl-sm"
                        : "rounded-bl-3xl"
                    }
                    ${
                      message.isMe && messages[index + 1]?.isMe
                        ? "rounded-br-sm"
                        : "rounded-br-3xl"
                    }
                    
                     `}
                  >
                    {message.message}
                  </li>
                ))}
              </ul>
              <form
                className="bg-slate-200 p-4 flex gap-3"
                onSubmit={sendMessage}
              >
                <input
                  type="text"
                  name="message_input"
                  id="mesasge_input"
                  className="p-2.5 flex-1 outline-none rounded-md"
                  onChange={({ target }) => setInputMessage(target.value)}
                  value={inputMessage}
                  autoComplete="off"
                />
                <button
                  type="submit"
                  className="w-12 bg-dark text-slate-50 rounded-md flex items-center justify-center"
                >
                  <IoMdSend fontSize="1.7rem" />
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
