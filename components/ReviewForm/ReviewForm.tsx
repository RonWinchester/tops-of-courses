import { ReviewFormProps } from "./ReviewForm.props";
import styles from "./ReviewForm.module.css";
import cn from "classnames";
import { Input } from "../Input/Input";
import { Textarea } from "../Textarea/Textarea";
import { Rating } from "../Rating/Rating";
import { Button } from "../Button/Button";
import CloseIcon from "./close.svg";
import { useForm, Controller } from "react-hook-form";
import { IReviewForm, IReviewSecndResponse } from "./ReviewForm.interface";
import axios from "axios";
import { API } from "../../helpers/api";
import { useState } from "react";
export const ReviewForm = ({
  productId,
  isOpend,
  color = "white",
  className,
  ...props
}: ReviewFormProps): JSX.Element => {
  const { register, control, handleSubmit, formState: {errors}, reset } = useForm<IReviewForm>();
  const [isSuccess, setisSuccess] = useState<boolean>(false)
  const [isError, setIsError] = useState<string | boolean>(false)

  const onSubmit = async (formData: IReviewForm) => {
    try {
      const { data } = await axios.post<IReviewSecndResponse>(API.review.createDemo, {...formData, productId});
      if(data.message) {
        setisSuccess(true);
        reset();
      } else {
        setIsError('Что-то пошло не так')
      }
    } catch (e:any) {
      setIsError(e.message)
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cn(styles.reviewForm, className)} {...props}>
        <Input
          {...register("name", {required: {value: true, message: 'Заполните имя'}})}
          placeholder="Имя"
          className={styles.firstInput}
          error={errors.name}
          tabIndex={isOpend ? 0 : -1}
        />
        <Input
          {...register("title", {required: {value: true, message: 'Заполните заголовок'}})}
          placeholder="Заголовок отзыва"
          className={styles.secondInput}
          error={errors.title}
          tabIndex={isOpend ? 0 : -1}
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
                tabIndex={isOpend ? 0 : -1}
              />
            )}
          ></Controller>
        </div>
        <Textarea
          {...register("description", {required: {value: true, message: 'Заполните отзыв'}})}
          placeholder="Текст отзыва"
          className={styles.description}
          error={errors.description}
          tabIndex={isOpend ? 0 : -1}
        />
        <div className={styles.submit}>
          <Button appearance="primary" tabIndex={isOpend ? 0 : -1}>Отправить</Button>
          <span className={styles.info}>
            * Перед публикацией отзыв пройдет предварительную модерацию и
            проверку
          </span>
        </div>
      </div>
     {isSuccess && <div className={styles.success}>
        <h3 className={styles.successTitle}>Ваш отзыв отправлен</h3>
        <p className={styles.successDescription}>
          Спасибо, ваш отзыв будет опубликован после проверки
        </p>
        <CloseIcon onClick={() => {setisSuccess(false)}} className={styles.close} />
      </div>}
      {isError && <div className={styles.error}>
        'Что-то пошло не так, попробуйте позже'
        <CloseIcon onClick={() => {setIsError(false)}} className={styles.close} />
      </div>}
    </form>
  );
};
