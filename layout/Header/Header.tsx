import { IHeader } from "./Header.props";
import style from "./Header.module.css";
import cn from "classnames";
import Logo from "../logo.svg";
import { ButtonIcon } from "../../components";
import { motion } from "framer-motion";
import { Sidebar } from "../Sidebar/Sidebar";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export const Header = ({ className, ...props }: IHeader): JSX.Element => {
  const [isOpend, setIsOpend] = useState<boolean>(false);
  const router = useRouter();
  const variants = {
    opened: {
      opacity: 1,
      x: 0,
      transition: {
        stiffness: 20
      }
    },
    closed: {
      opacity: 0,
      x: '100%',
    }
  }
  useEffect(()=>{
    setIsOpend(false)
  }, [router])
  return (
    <header className={cn(className, style.header)} {...props}>
      <Logo />
      <ButtonIcon
        appearance="white"
        icon="burger"
        onClick={() => {
          setIsOpend(true);
        }}
      />
      <motion.div className={style.mobileMenu} variants={variants} initial={'closed'} animate={isOpend ? 'opened' : 'closed'}>
        <Sidebar />
        <ButtonIcon
          appearance="white"
          icon="close"
          className={style.menuClose}
          onClick={() => {
            setIsOpend(false);
          }}
        />
      </motion.div>
    </header>
  );
};
