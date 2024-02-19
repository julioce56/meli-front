"use client";

import { FC } from "react";
import { ItemsListHook } from "../hooks/items-list.hook";
import styles from "./items-list.module.scss";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

const ItemsList: FC = () => {
  const { getOnlyFourItems, handleGetDetailItem, currentInputSearch } = ItemsListHook();

  return (
    <>
    <title>{`Busqueda relacionada con ${currentInputSearch}`}</title>
    <div className={styles.listWrapper}>
      {getOnlyFourItems &&
        getOnlyFourItems().items.map((item, i) => (
          <div
            className={styles.item}
            key={`${item.id}-${i}`}
            onClick={() => handleGetDetailItem(item.id)}
          >
            <div className={styles.thumbnailWrapper}>
              <Image
                src={item.picture}
                alt={item.title}
                width={0}
                height={0}
                sizes="100vw"
                className={styles.thumbnail}
              />
            </div>
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
            <div>
              <div className={styles.condition}>{item.condition}</div>
            </div>
          </div>
        ))}
    </div>
    </>
   
  );
};

export default ItemsList;
