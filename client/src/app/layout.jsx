import "./global.css";
import { Nunito } from "next/font/google";
import Header from "./ui/header/Header.jsx";
import Footer from "./ui/footer/Footer.jsx";
import { StoreProvider } from "./StoreProvider";
import styles from "./layout.module.scss";

export const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
});

export const metadata = {
  title: "kage.store",
  // description: "tviy.buyeer",
};

async function getData() {
  try {
    const res = await fetch(`http://localhost:4000/api/products`);

    if (!res.ok) {
      throw new Error("Server error");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    return console.log(error.massage);
  }
}

export default async function RootLayout({ children }) {
  const data = await getData();
  return (
    <html lang="en">
      <body className={nunito.className}>
        <div className={styles[`wrapper`]}>
          <StoreProvider products={data}>
            <Header />
            {children}
          </StoreProvider>
          <Footer />
        </div>
      </body>
    </html>
  );
}
