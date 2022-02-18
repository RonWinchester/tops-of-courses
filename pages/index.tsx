import Head from "next/head";
import Image from "next/image";
import { Button, Htag } from "../components/";

export default function Home(): JSX.Element {
  return (
    <div>
     <Htag tag="h1">Текст</Htag>
     <Button appearance={"primary"} arrow='right'>Кнопка</Button>
    </div>
  );
}
