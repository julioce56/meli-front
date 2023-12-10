import { FC } from "react";
import styles from "./breadcrumb.module.scss";
import { BreadCrumbHook } from "../../hooks/breadcrumb.hook";

const Breadcrumb: FC = () => {
  const { categories, handleSelectItem } = BreadCrumbHook();

  return (
    <div className={styles.breadcrumbWrapper}>
      {categories &&
        categories.map((category, i) => (
          <div className={styles.category} key={`${category}-${i}`}>
            <div
              className={styles.text}
              onClick={() => handleSelectItem(category)}
            >
              {category}
            </div>

            {i !== categories.length - 1 && (
              <small className={styles.separator}>{">"}</small>
            )}
          </div>
        ))}
    </div>
  );
};

export default Breadcrumb;
