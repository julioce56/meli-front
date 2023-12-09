'use client'

import { Provider } from "react-redux";
import Header from "./core/ui/components/header/header";
import { store } from "./core/store/store";

const Home = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <Header />
      {children}
    </Provider>
  );
};

export default Home;
