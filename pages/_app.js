import FooterComponent from "@/components/global/footer/FooterComponent";
import HeaderComponent from "@/components/global/header/HeaderComponent";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <HeaderComponent />
      <Component {...pageProps} />
      <FooterComponent />
    </>
  );
}
