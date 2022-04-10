import { ISidebar } from "./Sidebar.props";
import style from './Sidebar.module.css'
import cn from 'classnames'
import { Menu } from "../Menu/Menu";


export const Sidebar = ({...props}: ISidebar): JSX.Element => {
  return (
    <nav {...props}>
      <Menu></Menu>
    </nav>
  )
}