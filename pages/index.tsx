import { GetStaticProps } from "next";
import React from "react";
import { Button, Htag, Paragraph, Rating, Tag } from "../components/";
import { withLayout } from "../layout/Layout";
import axios from "axios";
import { MenuItem } from "../interfaces/menu.interfaces";

function Home({ menu }: HomeProps): JSX.Element {
  const [state, useState] = React.useState<number>(4);

  return (
    <>
      <Htag tag="h1">Текст</Htag>
      <Button appearance={"primary"} arrow="right">
        Кнопка
      </Button>
      <Paragraph size="s">Маленький</Paragraph>
      <Paragraph>Средний</Paragraph>
      <Paragraph size="l">Большой</Paragraph>
      <Tag color="red" size="m">
        Red
      </Tag>
      <Tag color="primary" size="l">
        primary
      </Tag>
      <Tag color="grey" href="yandex.ru">
        grey
      </Tag>
      <Rating rating={state} isEditable={true} setRating={useState}></Rating>
      <ul>
        
      </ul>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    {
      firstCategory,
    }
  );
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
