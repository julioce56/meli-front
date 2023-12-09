import { FC } from "react";
import styles from "./breadcrumb.module.scss";
import { BreadCrumbHook } from "../../hooks/breadcrumb.hook";

const Breadcrumb: FC = () => {
  const { categories } = BreadCrumbHook();

  console.log(categories,'cat');

  return (
    <div className={styles.breadcrumbWrapper}>
      {categories &&
        categories.map((category, i) => (
          <div className={styles.category} key={`${category}-${i}`}>
            {category}
            {i !== categories.length - 1 && (
              <small className={styles.separator}>{">"}</small>
            )}
          </div>
        ))}
    </div>
  );
};

export default Breadcrumb;
