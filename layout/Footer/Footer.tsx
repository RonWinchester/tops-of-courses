import { IFooter } from "./Footer.props";
import style from './Footer.module.css'
import cn from 'classnames'
import {format} from 'date-fns'

export const Footer = ({className ,...props}: IFooter): JSX.Element => {
  return (
    <footer className={cn(className, style.footer)} {...props}>
      <p>OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены</p>
      <a href="#" target='_blank'>Пользовательское соглашение</a>
      <a href="#" target='_blank'>Политика конфиденциальности</a>
    </footer>
  )
}