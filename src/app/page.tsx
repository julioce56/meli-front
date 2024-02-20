import Image from "next/image";
import startSearchImg from "@/public/assets/img/start-search-meli.png";
import styles from "./page.module.scss";

const InitialPage = () => {
  return (
    <div className={styles.initialWrapper}>
      <Image
        data-testid="startSearchImg"
        src={startSearchImg}
        width={0}
        height={0}
        alt={"Esperando busqueda"}
        className={styles.image}
      />
      <h2 className={styles.text}>¡Descubre que tenemos para tí!</h2>
    </div>
  );
};

export default InitialPage;
