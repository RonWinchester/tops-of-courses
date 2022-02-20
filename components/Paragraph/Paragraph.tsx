import { IParagraph } from "./Paragraph.props";
import styles from "./Paragraph.module.css";
import cn from "classnames";

export const Paragraph = ({
  children,
  size = "m",
  className,
  ...props
}: IParagraph): JSX.Element => {
  return (
    <p className={cn(styles.paragraph, className, styles[size])} {...props}>{children}</p>
  );
};
