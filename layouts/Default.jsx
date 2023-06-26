import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "@/components/Footer/Footer";
import AuthForm from "@/components/Form/Auth/Auth";
import HeaderWithoutSearch from "@/components/Header/Header";

export default function WithoutSearchLayout({ children }) {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <HeaderWithoutSearch showLoginFunc={() => setOpen(true)} />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </div>
      <AuthForm />
    </>
  );
}
