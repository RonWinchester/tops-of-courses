import { SortEnum, SortProps } from "./Sort.props";
import styles from "./Sort.module.css";
import cn from "classnames";
import SortIcon from "./Sort.svg";

export const Sort = ({
  sort,
  setSort,
  className,
  ...props
}: SortProps): JSX.Element => {
  return (
    <div className={cn(styles.sort, className)} {...props}>
      <span
        onClick={() => {
          setSort(SortEnum.Rating);
        }}
        className={cn({ [styles.active]: sort == SortEnum.Rating })}
      >
        <SortIcon className={cn(styles.sortIcon)} />
        По рейтингу
      </span>
      <span
        onClick={() => {
          setSort(SortEnum.Rating);
        }}
        className={cn({ [styles.active]: sort == SortEnum.Price })}
      >
        <SortIcon className={cn(styles.sortIcon)} />
        Цена
      </span>
    </div>
  );
};
