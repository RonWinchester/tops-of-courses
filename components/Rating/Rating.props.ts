import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

export interface IRating
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  isEditable?: boolean;
  rating: number;
  setRating?: (rating: number) => void;
  error?: FieldError;
}
