import { ISidebar } from "./Sidebar.props";
import style from './Sidebar.module.css'
import cn from 'classnames'
import { Menu } from "../Menu/Menu";
import Logo from '../logo.svg';


export const Sidebar = ({className, ...props}: ISidebar): JSX.Element => {
  return (
    <div className={cn(className, style.sidebar)} {...props}>
      <Logo className={style.logo}/>
      <div>Поиск</div>
      <Menu></Menu>
    </div>
  )
}