import { ITextarea } from "./Textarea.props";
import styles from "./Textarea.module.css";
import cn from "classnames";
import { ForwardedRef, forwardRef } from "react";

export const Textarea = forwardRef(
  (
    { className, error, ...props }: ITextarea,
    ref: ForwardedRef<HTMLTextAreaElement>
  ): JSX.Element => {
    return (
      <div className={cn(styles.inputWrapper, className)}>
        <textarea
          className={cn(styles.input, className, {
            [styles.error]: error
          })}
          ref={ref}
          {...props}
        />
        {error && <span role="alert" className={styles.errorMessage}>{error.message}</span>}
      </div>
    );
  }
);
