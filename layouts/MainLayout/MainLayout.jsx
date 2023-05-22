import Footer from "@/components/Footer/Footer";
import AuthForm from "@/components/Form/Auth/Auth";
import Header from "@/components/Header/Header";
import Head from "next/head";

export default function MainLayout({ children }) {
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
        <Header />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </div>
      <AuthForm/>
    </>
  );
}
