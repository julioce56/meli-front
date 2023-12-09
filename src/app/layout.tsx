import type { Metadata } from "next";
import styles from "./global.module.scss";
import Header from "./core/ui/components/header/header";

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
      <body className={styles.wrapper}>
        <Header />
        {children}
      </body>
    </html>
  );
}
