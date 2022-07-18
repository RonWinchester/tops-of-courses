import { HTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import { ProductModel } from "../../interfaces/product.interface";

export interface IProduct extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  product: ProductModel
}