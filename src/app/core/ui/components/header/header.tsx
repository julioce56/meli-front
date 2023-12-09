import { FC } from "react";
import styles from "./header.module.scss";
import Image from "next/image";
import meliLogo from "@/public/assets/img/mercado-libre-logo.png";
import { HeaderHook } from "../../hooks/header.hook";
import searchLogo from "@/public/assets/img/search.png";

const Header: FC = () => {
  const { inputValue, setInputValue, handleSearchItem, goToHome } = HeaderHook();
  
  return (
    <div className={styles.headerWrapper}>
      <Image src={meliLogo} alt="Meli logo" width={120} onClick={goToHome} />
      <div className={styles.inputWrapper}>
        <input type="text" value={inputValue || ""} onChange={(e) => setInputValue(e.target.value)} />
        <div
          className={styles.search}
          onClick={() => handleSearchItem(inputValue)}
        >
          <Image src={searchLogo} alt="Search button" width={23} />
        </div>
      </div>
    </div>
  );
};

export default Header;
