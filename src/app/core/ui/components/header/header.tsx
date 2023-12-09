import { FC } from "react";
import styles from "./header.module.scss";
import Image from "next/image";
import meliLogo from "@/public/assets/img/mercado-libre-logo.png"
import HeaderActions from "../header-actions/header-actions";

const Header: FC = () => {
    return (
        <div className={styles.headerWrapper}>
            <Image src={meliLogo} alt="Meli logo" width={120} />
            <HeaderActions />
        </div>
    )
}

export default Header;