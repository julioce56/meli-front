"use client";

import { store } from "@/app/core/store/store";
import { Provider } from "react-redux";
import Header from "../header/header";
import Breadcrumb from "../breadcrumb/breadcrumb";
import styles from "./home.module.scss";
import { usePathname } from "next/navigation";

const Home = ({ children }: { children: React.ReactNode }) => {
  const usePath = usePathname();

  return (
    <Provider store={store}>
      <Header />
      <div className={styles.homeWrapper}>
        {usePath !== "/" && <Breadcrumb />}
        {children}
      </div>
    </Provider>
  );
};

export default Home;
