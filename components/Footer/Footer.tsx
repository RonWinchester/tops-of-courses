import { IFooter } from "./Footer.props";
import style from './Footer.module.css'
import cn from 'classnames'


export const Footer = ({...props}: IFooter): JSX.Element => {
  return (
    <header {...props}>
      Footer
    </header>
  )
}