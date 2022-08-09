import styles from "./Up.module.css";
import Icon from "./Up.svg";
import cn from "classnames";
import { useScrollY } from "../../hooks/useScrollY";
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";

export const Up = ({ ...props }): JSX.Element => {
  const controls = useAnimation();
  const y = useScrollY();

  useEffect(()=>{
    controls.start({ opacity: y / document.body.scrollHeight})
  }, [y, controls])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.div className={styles.up} animate={controls} initial={{opacity: 0}}>
      <ButtonIcon appearance="primary" icon="up" onClick={scrollToTop}/>
    </motion.div>
  );
};
