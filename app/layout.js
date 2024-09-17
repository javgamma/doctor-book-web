import { Outfit } from "next/font/google";
import "./globals.css";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import { Toaster } from "sonner";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "mediconecta",
  description: "Tu medico a tu alcance",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={outfit.className}>
        <div>
          <Header />
          {children}
          <Toaster/>
        </div>
          <Footer/>
      </body>
    </html>
  );
}
