import { IInput } from "./Textarea.props";
import styles from "./Textarea.module.css";
import cn from "classnames";

export const Textarea = ({
  className,
  ...props
}: IInput): JSX.Element => {
  return (
    <textarea className={cn(styles.input, className)} {...props}/>
  );
};
