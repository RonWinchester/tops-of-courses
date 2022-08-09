import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import up from './Up.svg';
import close from './Close.svg';
import burger from './Burger.svg';

export const icons = {
    up,
    close,
    burger
};

export type IconName = keyof typeof icons;

export interface ButtonIconProps extends DetailedHTMLProps <ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    appearance: 'primary' | 'white';
    icon: IconName;
}