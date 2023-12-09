import type { Metadata } from "next";
import styles from "./global.module.scss";
import Header from "./core/ui/components/header/header";
import { Provider } from "react-redux";
import { store } from "./core/store/store";
import Home from "./core/ui/components/home/home";
import { Inter } from 'next/font/google';
import './globalicons.module.scss'; 
import 'bootstrap/dist/css/bootstrap.min.css';
 
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Buscar producto de tú interés",
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
          <Home>
            {children}
          </Home>
      </body>
    </html>
  );
}
