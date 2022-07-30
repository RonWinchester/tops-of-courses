import { IRating } from "./Rating.props";
import styles from "./Rating.module.css";
import cn from "classnames";
import StarIcon from "./star.svg";
import React, { ForwardedRef, forwardRef } from "react";

export const Rating = forwardRef(
  (
    {
      isEditable = false,
      rating,
      setRating,
      className,
      error,
      ...props
    }: IRating,
    ref: ForwardedRef<HTMLDivElement>
  ): JSX.Element => {
    const [ratingArray, setRatingArray] = React.useState<JSX.Element[]>(
      new Array(5).fill(<></>)
    );

    const changeDisplay = (i: number) => {
      isEditable && constructRating(i);
    };

    const changeRating = (i: number) => {
      if (!isEditable || !setRating) {
        return;
      }
      setRating(i);
    };

    const handleSpace = (i: number, e: React.KeyboardEvent<SVGElement>) => {
      if (e.code !== "Space" || !setRating) {
        return;
      } else {
        setRating(i);
      }
    };

    const constructRating = (currentRating: number) => {
      const updateArray = ratingArray.map((r: JSX.Element, i: number) => {
        return (
          <StarIcon
            className={cn(styles.star, {
              [styles.filled]: i < currentRating,
              [styles.editable]: isEditable,
            })}
            onMouseEnter={() => {
              changeDisplay(i + 1);
            }}
            onMouseLeave={() => {
              changeDisplay(rating);
            }}
            onClick={() => {
              changeRating(i + 1);
            }}
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(e: React.KeyboardEvent<SVGElement>) =>
              isEditable && handleSpace(i + 1, e)
            }
          ></StarIcon>
        );
      });
      setRatingArray(updateArray);
    };

    React.useEffect(() => {
      constructRating(rating);
    }, [rating]);

    return (
      <div
        {...props}
        ref={ref}
        className={cn(styles.ratingWrapper, { [styles.error]: error })}
      >
        {ratingArray.map((r, i: number) => (
          <span key={i}>{r}</span>
        ))}
        {error && (
          <span role="alert" className={styles.errorMessage}>
            {error.message}
          </span>
        )}
      </div>
    );
  }
);
