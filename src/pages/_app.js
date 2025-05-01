import "@/styles/globals.css";
import Navbar from "./component/navbar/Navbar";
import FloatingButtons from "./component/floatingicons/Floatingicon";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <FloatingButtons />
    </>
  );
}
