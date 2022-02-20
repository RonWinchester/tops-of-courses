import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";


export interface ITag extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: 'm' | 'l';
  children: ReactNode;
  color?: 'ghost' | 'red' | 'grey' | 'green' | 'primary';
	href?: string;
}