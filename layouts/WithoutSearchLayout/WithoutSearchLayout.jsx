import Footer from "@/components/Footer/Footer";
import AuthForm from "@/components/Form/Auth/Auth";
import HeaderWithoutSearch from "@/components/HeaderWithoutSearch/HeaderWithoutSearch";
import Head from "next/head";
import { useState } from "react";

export default function WithoutSearchLayout({ children }) {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <HeaderWithoutSearch showLoginFunc={()=>setOpen(true)}/>
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </div>
      <AuthForm open={isOpen} setOpenFun={setOpen}/>
    </>
  );
}
