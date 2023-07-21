import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReactNode } from "react";
import Footer from "@/components/Footer/Footer";
import AuthModal from "@/components/Modal/Auth/User";
import Header from "@/components/Header/Header";
import ChatModal from "@/components/Modal/Chat";

interface Props {
  children: ReactNode;
}

export default function DefaultLayout({ children }: Props) {
  return (
    <>
      <div className="flex flex-col min-h-full">
        <Header />
        <main className="flex-1 mt-20">{children}</main>
        <Footer />
      </div>
      <AuthModal />
      <ChatModal />
    </>
  );
}
