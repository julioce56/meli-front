import { FC } from "react";
import styles from "./header.module.scss";
import Image from "next/image";
import meliLogo from "@/public/assets/img/mercado-libre-logo.png"
import searchLogo from "@/public/assets/img/search.png";

const Header: FC = () => {
    return (
        <div className={styles.headerWrapper}>
            <Image src={meliLogo} alt="Meli logo" width={120} />
            <div className={styles.inputWrapper}>
                <input type="text" />
                <div className={styles.search}>
                    <Image src={searchLogo} alt="Search button" width={23} />
                </div>
            </div>
        </div>
    )
}

export default Header;