"use client";

import { FC } from "react";
import { ItemsListHook } from "../hooks/items-list.hook";
import styles from "./items-list.module.scss";
import Image from "next/image";

const ItemsList: FC = () => {
  const { getOnlyFourItems, handleGetDetailItem } = ItemsListHook();
  

  return (
    <div className={styles.listWrapper}>
      {getOnlyFourItems &&
        getOnlyFourItems().items.map((item, i) => (
          <div key={`${item.id}-${i}`}>
            <div className={styles.item} >
              <Image
                src={item.picture}
                alt={item.title}
                width={100}
                height={100}
                onClick={() => handleGetDetailItem(item.id)}
              />
              <div className={styles.description}>
                <div className={styles.price}>
                  <strong>
                    {item.price.currency} {item.price.amount.toLocaleString()}{" "}
                  </strong>
                  <div className={styles.shipping}>
                    <span className="material-symbols-outlined">
                      local_shipping
                    </span>
                  </div>
                </div>
                <div className={styles.title}>{item.title}</div>
              </div>
              <div className={styles.condition}>{item.condition}</div>
            </div>
            <hr className={styles.separator} />
          </div>
        ))}
    </div>
  );
};

export default ItemsList;
