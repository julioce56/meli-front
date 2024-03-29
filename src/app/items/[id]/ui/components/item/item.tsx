"use client";

import { FC, useEffect } from "react";
import { ItemHook } from "../../hooks/item.hook";
import Image from "next/image";
import styles from "./item.module.scss";
import { numberFormat } from "@/app/core/ui/utils/format";
import { ItemsListHook } from "@/app/items/ui/hooks/items-list.hook";
import { useParams } from "next/navigation";

const Item = () => {
  const { item, handleButton } = ItemHook();
  const { handleGetDetailItem } = ItemsListHook();
  const params = useParams();

  useEffect(() => {
    if (!item) {
      handleGetDetailItem(params?.id, true);
    }
  }, []);

  return (
    item && (
      <>
        <title>{`${item?.title}`}</title>
        <div className={styles.itemWrapper}>
          <div className={styles.item}>
            <div>
              <Image
              data-testid="testImgThumbnail"
                src={item.picture}
                alt={item.title}
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
                priority={true}
              />
            </div>
            <div>
              <small>
                {item.condition} - {numberFormat(item.initial_quantity)}{" "}
                vendidos
              </small>
              <div>
                <strong>{item.title}</strong>
              </div>
              <div className={styles.price}>
                {item.price.currency} {item.price.amount.toLocaleString()}
              </div>
              <div className={styles.button} onClick={handleButton}>
                Comprar
              </div>
            </div>
            <div>
              <div className={styles.description}>
                <h4>Descripción del producto</h4>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default Item;
