import { ButtonProps } from "./Button.props";
import styles from "./Button.module.css";
import cn from "classnames";
import ArrowIcon from "./arrow.svg";

export const Button = ({
  appearance,
  children,
  arrow = "none",
  className,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, className, styles[appearance])}
      {...props}
    >
      {children}
      {arrow !== "none" && (
        <span className={cn(styles.arrow, styles[arrow])}>
          <ArrowIcon />
        </span>
      )}
    </button>
  );
};
