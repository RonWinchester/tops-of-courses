import { IDivider } from "./Divider.props";
import styles from "./Divider.module.css";
import cn from "classnames";

export const Divider = ({
  className,
  ...props
}: IDivider): JSX.Element => {
  return (
   <hr className={cn(className, styles.hr)} {...props}></hr>
  );
};
