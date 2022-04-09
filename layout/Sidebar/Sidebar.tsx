import { ISidebar } from "./Sidebar.props";
import style from './Sidebar.module.css'
import cn from 'classnames'


export const Sidebar = ({...props}: ISidebar): JSX.Element => {
  return (
    <nav {...props}>
      Sidebar
    </nav>
  )
}