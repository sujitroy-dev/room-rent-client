import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "@/components/Footer/Footer";
import AuthForm from "@/components/Form/Auth/Auth";
import Header from "@/components/Header/Header";

export default function DefaultLayout({ children }) {
  return (
    <>
      <div className="flex flex-col min-h-full">
        <Header showLoginFunc={() => setOpen(true)} />
        <main className="flex-1 mt-20">{children}</main>
        <Footer />
      </div>
      <AuthForm />
    </>
  );
}
