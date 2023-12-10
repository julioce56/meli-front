import { FC } from "react";
import styles from "./header.module.scss";
import Image from "next/image";
import meliLogo from "@/public/assets/img/mercado-libre-logo.png";
import { HeaderHook } from "../../hooks/header.hook";

const Header: FC = () => {
  const { inputValue, setInputValue, goToHome, handleKeyDown, handleButtonSearch } =
    HeaderHook();

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.controls}>
        <Image
          src={meliLogo}
          alt="Meli logo"
          width={120}
          onClick={goToHome}
          className={styles.meliImage}
        />
        <div className={styles.inputWrapper}>
          <input
            type="text"
            value={inputValue || ""}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e)}
            autoFocus
          />
          <div
            className={styles.search}
            onClick={handleButtonSearch}
          >
            <span className="material-symbols-outlined">search</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
