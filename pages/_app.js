/** @format */

import Footer from "@/layouts/Footer";
import Navbar from "@/layouts/Navbar";
import "@/styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <div>
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;
