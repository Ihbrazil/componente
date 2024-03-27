import Head from "next/head";
import Topo from "@/componentes/Topo";
import Card from "@/componentes/Card";
import Rodape from "@/componentes/Rodape";
import estilos from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Topo />
        <section className={estilos.secao_cards}>
          <Card />
          <Card />
          <Card />
        </section>
        <Rodape />
      </main>
    </>
  )
}