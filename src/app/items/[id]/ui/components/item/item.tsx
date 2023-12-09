"use client";

import { FC, useEffect } from "react";
import { ItemHook } from "../../hooks/item.hook";
import Image from "next/image";
import styles from "./item.module.scss";
import { Col, Row } from "react-bootstrap";
import { numberFormat } from "@/app/core/ui/utils/format";
import { ItemsListHook } from "@/app/items/ui/hooks/items-list.hook";
import { useParams } from "next/navigation";

const Item: FC = () => {
  const { item } = ItemHook();
  console.log(item);
  const { handleGetDetailItem } = ItemsListHook();
  const params = useParams();

  useEffect(() => {
    if (!item) {
      handleGetDetailItem(params?.id as string, true);
    }
  }, []);

  return (
    item && (
      <div className={styles.itemWrapper}>
        <Row>
          <Col sm={8}>
            <Image
              src={item.picture}
              alt={item.title}
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </Col>
          <Col sm={4}>
            <small>
              {item.condition} - {numberFormat(item.initial_quantity)} vendidos
            </small>
            <div>
              <strong>{item.title}</strong>
            </div>
            <div className={styles.price}>
              {item.price.currency} {item.price.amount.toLocaleString()}
            </div>
            <div className={styles.button}>Comprar</div>
          </Col>
          <Col sm={8}>
            <div className={styles.description}>
              <h4>Descripción del producto</h4>
              <p>{item.description}</p>
            </div>
          </Col>
        </Row>
      </div>
    )
  );
};

export default Item;
