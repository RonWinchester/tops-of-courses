import Head from "next/head";
import Image from "next/image";
import React from "react";
import { Button, Htag, Paragraph, Rating, Tag } from "../components/";
import { withLayout } from "../layout/Layout";

function Home(): JSX.Element {
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
    </>
  );
}

export default withLayout(Home);
