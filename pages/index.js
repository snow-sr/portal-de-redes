import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

const Home = () => {
  return (
    <>
      <Head>
        <title>ADAM - Routers</title>
        <meta name="description" content="Roteadores do Adamo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle pretitle="Sobre nós" title="Adam routers">
        ADAM Routers são roteadores de qualidade, com um preço acessível e
        voltados para um alto desempenho tanto residencial quanto empresarial.
        Uma empresa sediada em Joinville, Santa Catarina, e apoiamos o comércio
        local.
      </SectionTitle>
    </>
  );
};

export default Home;
