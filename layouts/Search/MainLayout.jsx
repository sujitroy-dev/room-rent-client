import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "@/components/Footer/Footer";
import AuthForm from "@/components/Form/Auth/Auth";
import Header from "@/components/Header/Header";
import { useState } from "react";

export default function MainLayout({ children }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Header />
          <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </div>
      <AuthForm open={isOpen} setOpenFun={setOpen}/>
    </>
  );
}
