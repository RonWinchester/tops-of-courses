import { HTMLAttributes, DetailedHTMLProps, TextareaHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

export interface ITextarea extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  error?: FieldError;
}