import { ReviewFormProps } from "./ReviewForm.props";
import styles from "./ReviewForm.module.css";
import cn from "classnames";
import { Input } from "../Input/Input";
import { Textarea } from "../Textarea/Textarea";
import { Rating } from "../Rating/Rating";
import { Button } from "../Button/Button";
import CloseIcon from "./close.svg";
import { useForm, Controller } from "react-hook-form";
import { IReviewForm } from "./ReviewForm.interface";
export const ReviewForm = ({
  productId,
  color = "white",
  className,
  ...props
}: ReviewFormProps): JSX.Element => {
  const { register, control, handleSubmit, formState: {errors} } = useForm<IReviewForm>();

  const onSubmit = (data: IReviewForm) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cn(styles.reviewForm, className)} {...props}>
        <Input
          {...register("name", {required: {value: true, message: 'Заполните имя'}})}
          placeholder="Имя"
          className={styles.firstInput}
          error={errors.name}
        />
        <Input
          {...register("title", {required: {value: true, message: 'Заполните заголовок'}})}
          placeholder="Заголовок отзыва"
          className={styles.secondInput}
          error={errors.title}
        />
        <div className={styles.rating}>
          <span>Оценка</span>
          <Controller
            control={control}
            name="rating"
            rules={{required: {value: true, message: 'Оцените курс'}}}
            render={({ field }) => (
              <Rating
                rating={field.value}
                isEditable
                setRating={field.onChange}
                ref={field.ref}
                error={errors.rating}
              />
            )}
          ></Controller>
        </div>
        <Textarea
          {...register("description", {required: {value: true, message: 'Заполните отзыв'}})}
          placeholder="Текст отзыва"
          className={styles.description}
          error={errors.description}
        />
        <div className={styles.submit}>
          <Button appearance="primary">Отправить</Button>
          <span className={styles.info}>
            * Перед публикацией отзыв пройдет предварительную модерацию и
            проверку
          </span>
        </div>
      </div>
      <div className={styles.success}>
        <h3 className={styles.successTitle}>Ваш отзыв отправлен</h3>
        <p className={styles.successDescription}>
          Спасибо, ваш отзы будет опубликован после проверки
        </p>
        <CloseIcon className={styles.close} />
      </div>
    </form>
  );
};
