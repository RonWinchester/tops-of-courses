import Head from "next/head";
import Image from "next/image";
import { Button, Htag, Paragraph, Tag } from "../components/";

export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag="h1">Текст</Htag>
      <Button appearance={"primary"} arrow="right">
        Кнопка
      </Button>
      <Paragraph size="s">
        Маленький
      </Paragraph>
      <Paragraph>
        Средний
      </Paragraph>
      <Paragraph size="l">
        Большой
      </Paragraph>
      <Tag color="red" size="m">Red</Tag>
      <Tag color="primary" size="l">primary</Tag>
      <Tag color="grey" href="yandex.ru">grey</Tag>
    </div>
  );
}
