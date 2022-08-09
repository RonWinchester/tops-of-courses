import { ISearch } from "./Search.props";
import styles from "./Search.module.css";
import cn from "classnames";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { useState } from "react";
import SerachIcon from "./search.svg";
import { useRouter } from "next/router";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";

export const Search = ({ className, ...props }: ISearch): JSX.Element => {
  const [search, setSearch] = useState<string>("");
  const router = useRouter();
  const goToSerach = (): void => {
    router.push({
      pathname: "/search",
      query: {
        q: search,
      },
    });
  };


  const handleKeyDown = (e: KeyboardEvent) => {
    if(e.key == 'Enter') {
      goToSerach()
    }
  }

  return (
    <div className={cn(styles.search, className)} {...props}>
      <Input
        className={styles.input}
        placeholder="Поиск..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        onKeyDown={handleKeyDown}
      />
      <ButtonIcon className={styles.button} appearance='primary' icon='search' onClick={() => {
          goToSerach();
        }}/>
    </div>
  );
};
