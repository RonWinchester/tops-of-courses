import { ITag } from "./Tag.props"
import styles from "./Tag.module.css";
import cn from "classnames";


export const Tag = ({children, className, size='m', href, color='ghost', ...props}:ITag): JSX.Element => {
  return (
    <div className={cn(styles.tag, className, styles[size], styles[color])} {...props}>
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  )
}