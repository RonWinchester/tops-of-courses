import { IProduct } from "./Product.props";
import styles from "./Product.module.css";
import cn from "classnames";
import { Card } from "../Card/Card";
import { Rating } from "../Rating/Rating";
import { Button, Divider, Review, ReviewForm, Tag } from "..";
import { declOfNum, priceRu } from "../../helpers/helpers";
import Image from "next/image";
import { ForwardedRef, forwardRef, useRef, useState } from "react";
import { motion } from 'framer-motion'
export const Product = motion(forwardRef(({
  product,
  className,
  ...props
}: IProduct, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
  const [isReviewOpened, setReviewOpened] = useState<boolean>(false);
  const reviewRef = useRef<HTMLDivElement>(null)
const scrollToreview = () => {
  setReviewOpened(true)
  reviewRef.current?.scrollIntoView({
    behavior: "smooth",
    block: "start"
  })
  reviewRef.current?.focus();
}

const variants = {
  visible: {
    height: "auto",
    overflow: "inherit",
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  },
  hidden: {
    height: 0,
    padding: 0,
    overflow: "hidden",
    opacity: 0
  }
}

  return (
    <div className={className} {...props} ref={ref}>
      <Card className={styles.product}>
        <div className={styles.logo}>
          <Image
            src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
            alt={product.title}
            width={70}
            height={70}
          />
        </div>
        <div className={styles.title}>{product.title}</div>
        <div className={styles.price}>
          {priceRu(product.price)}
          {product.oldPrice && (
            <Tag className={styles.oldPrice} color="green">
              {priceRu(product.price - product.oldPrice)}
            </Tag>
          )}
        </div>
        <div className={styles.credit}>
          {priceRu(product.credit)}/<span className={styles.mounth}>месяц</span>
        </div>
        <div className={styles.rating}>
          <Rating rating={product.reviewAvg ?? product.initialRating} />
        </div>
        <div className={styles.tags}>
          {product.categories.map((c) => (
            <Tag key={c} color="ghost" className={styles.category}>
              {c}
            </Tag>
          ))}
        </div>
        <div className={styles.priceTitle}>цена</div>
        <div className={styles.creditTitle}>в кредит</div>
        <div className={styles.rateTitle}>
          <a href="#ref" onClick={()=>{scrollToreview()}}>{product.reviewCount}{" "}
          {declOfNum(product.reviewCount, ["отзыв", "отзыва", "отзывов"])}</a>
        </div>
        <Divider className={styles.hr} />
        <div className={styles.description}>{product.description}</div>
        <div className={styles.feature}>
          {product.characteristics.map((c) => (
            <div className={styles.characteristics} key={c.name}>
              <span className={styles.characteristicsName}>{c.name}</span>
              <span className={styles.characteristicsDots}></span>
              <span className={styles.characteristicsValue}>{c.value}</span>
            </div>
          ))}
        </div>
        <div className={styles.advBlock}>
          {product.advantages && (
            <div className={styles.advantages}>
              <div className={styles.advTitle}>Преимущества</div>
              <div>{product.advantages}</div>
            </div>
          )}
          {product.disAdvantages && (
            <div className={styles.disadvantages}>
              <div className={styles.advTitle}>Недостатки</div>
              <div>{product.disAdvantages}</div>
            </div>
          )}
        </div>
        <Divider className={cn(styles.hr, styles.hr2)} />
        <div className={styles.actions}>
          <Button appearance="primary">Узнать подробнее</Button>
          <Button
            appearance="ghost"
            arrow={isReviewOpened ? "down" : "right"}
            className={styles.reviewButton}
            onClick={() => {
              setReviewOpened(!isReviewOpened);
            }}
          >
            Читать отзывы
          </Button>
        </div>
      </Card>
      <motion.div
      variants={variants}
      initial={'hidden'}
      animate={isReviewOpened ? 'visible' : 'hidden'}
      >
        <Card
          color="blue"
          className={cn(styles.reviews)}
          ref={reviewRef}
          tabIndex={isReviewOpened ? 0 : -1}
        >
          {product.reviews.map(r => (
            <div key={r._id}>
              <Review review={r} />
              <Divider/>
            </div>
          ))}
          <ReviewForm isOpend={isReviewOpened} productId={product._id}></ReviewForm>
        </Card>
      </motion.div>
    </div>
  );
}));
