import { AdvantagesProps } from "./Advantages.props";
import styles from "./Advantages.module.css";
import cn from "classnames";
import AdvantageIcon from "./Advantages.svg";

export const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {
  return (
    <ul className={styles.advantages}>
      {advantages.map((item) => (
        <li key={item._id} className={styles.advantage}>
          <AdvantageIcon />
          <h4 className={styles.title}>{item.title}</h4>
          <hr className={styles.line}></hr>
          <p className={styles.description}>{item.description}</p>
        </li>
      ))}
    </ul>
  );
};
