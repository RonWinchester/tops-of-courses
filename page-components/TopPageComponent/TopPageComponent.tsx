import styles from "./TopPageComponent.module.css";
import cn from "classnames";
import { TopPageComponentProps } from "./TopPageComponent.props";
import {
  Advantages,
  Card,
  HhData,
  Htag,
  Paragraph,
  Tag,
} from "../../components";
import { TopLevelCategory } from "../../interfaces/page.interface";
import React from "react";

export const TopPageComponent = ({
  page,
  products,
  firstCategory,
  ...props
}: TopPageComponentProps): JSX.Element => {
  const [next, setNext] = React.useState(true);
  return (
    <div className={cn(styles.wrapper)}>
      <div className={cn(styles.title)}>
        <Htag tag="h1">{page.title}</Htag>
        {products && (
          <Tag color="grey" size="m">
            {products.length}
          </Tag>
        )}
        <span>Sort</span>
      </div>
      <div>
        {products && products.map((p) => <div key={p._id}>{p.title}</div>)}
      </div>
      <div className={cn(styles.hhTitle)}>
        <Htag tag="h2">Вакансии - {page.category}</Htag>
        <Tag color="red" size="m">
          hh.ru
        </Tag>
      </div>
      {firstCategory == TopLevelCategory.Courses && page.hh && (
        <HhData {...page.hh}></HhData>
      )}
      {page.advantages && page.advantages.length > 0 && (
        <>
          <Htag tag="h2">Преимущества</Htag>
          <Advantages advantages={page.advantages} />
        </>
      )}

      {page.seoText && (
        <>
          <div
            className={cn(styles.seo, { [styles.next]: next })}
            dangerouslySetInnerHTML={{ __html: page.seoText }}
          />{" "}
          <button className={cn(styles.nextBtn)} onClick={() => setNext(!next)}>{next ? "читать далее" : "скрыть"}</button>
        </>
      )}
      <Htag tag="h2">Получаемые навыки</Htag>
      {page.tags.map((t) => (
        <Tag key={t} color="primary">
          {t}
        </Tag>
      ))}
    </div>
  );
};