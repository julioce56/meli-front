'use client'

import { FC } from "react";
import styles from "./header-actions.module.scss";
import Image from "next/image";
import searchLogo from "@/public/assets/img/search.png";
import { HeaderHook } from "../../hooks/header.hook";

const HeaderActions: FC = () => {
const { handleSearchItem } = HeaderHook();

  return (
    <div className={styles.inputWrapper}>
      <input type="text" />
      <div className={styles.search} onClick={handleSearchItem}>
        <Image src={searchLogo} alt="Search button" width={23} />
      </div>
    </div>
  );
};

export default HeaderActions;
