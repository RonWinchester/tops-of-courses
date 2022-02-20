import Head from "next/head";
import Image from "next/image";
import { Button, Htag, Paragraph } from "../components/";

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
    </div>
  );
}
