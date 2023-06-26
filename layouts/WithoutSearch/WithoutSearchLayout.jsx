import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "@/components/Footer/Footer";
import AuthForm from "@/components/Form/Auth/Auth";
import HeaderWithoutSearch from "@/components/HeaderWithoutSearch/HeaderWithoutSearch";
import { useState } from "react";

export default function WithoutSearchLayout({ children }) {
  // const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <HeaderWithoutSearch showLoginFunc={()=>setOpen(true)}/>
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </div>
      <AuthForm/>
    </>
  );
}
