import { ITextarea } from "./Input.props";
import styles from "./Input.module.css";
import cn from "classnames";

export const Input = ({
  className,
  ...props
}: ITextarea): JSX.Element => {
  return (
    <input className={cn(styles.input, className)} {...props}/>
  );
};
