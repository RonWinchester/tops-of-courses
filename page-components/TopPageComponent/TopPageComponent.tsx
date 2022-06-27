import styles from "./TopPageComponent.module.css";
import cn from "classnames";
import { TopPageComponentProps } from "./TopPageComponent.props";
import { Card, HhData, Htag, Tag } from "../../components";
import { TopLevelCategory } from "../../interfaces/page.interface";

export const TopPageComponent = ({
  page,
  products,
  firstCategory,
  ...props
}: TopPageComponentProps): JSX.Element => {
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
      {firstCategory == TopLevelCategory.Courses && (
        <HhData {...page.hh}></HhData>
      )}
    </div>
  );
};
