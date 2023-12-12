import "./global.css";
import { Montserrat } from "next/font/google";
import Header from "./ui/header/header.jsx";
import Footer from "./ui/footer/footer.jsx";
import { StoreProvider } from "@/redux/slices/StoreProvider";
import styles from "./layout.module.scss";
import { TanstackProvider } from "../../providers/TanstackProvider";

const mont = Montserrat({ subsets: ["latin"], weight: "900" });

export const metadata = {
  title: "kage.store",
  // description: "tviy.buyeer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={styles[mont.className]}>
        <TanstackProvider>
          <StoreProvider>
            <div className={styles[`wrapper`]}>
              <Header />
              <main className={styles[`main`]}>{children}</main>
              <Footer />
            </div>
          </StoreProvider>
        </TanstackProvider>
      </body>
    </html>
  );
}
