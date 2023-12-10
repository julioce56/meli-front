import type { Metadata } from "next";
import styles from "./global.module.scss";
import Header from "./core/ui/components/header/header";
import { Provider } from "react-redux";
import { store } from "./core/store/store";
import Home from "./core/ui/components/home/home";
import { Inter } from 'next/font/google';
import './globalicons.module.scss'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toaster } from "sonner";
 
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Meli busqueda de productos",
  description: "Bienvenidos a la busqueda de productos en mercado libre",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${styles.wrapper}`}>
          <Toaster position="top-center" richColors/>
          <Home>
            {children}
          </Home>
      </body>
    </html>
  );
}
