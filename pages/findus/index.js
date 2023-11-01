import Navbar from "../../components/navbar";
import SectionTitle from "../../components/sectionTitle";
import Head from "next/head";
import Footer from "../../components/footer";
import MapCompIndex from "../../components/indexmap.js";

const Home = () => {
  return (
    <>
      <Head>
        <title>ADAM - Routers</title>
        <meta name="description" content="Roteadores do Adamo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <SectionTitle
        pretitle="Encontre a gente"
        title="Em várias localizações para melhor te atender"
      >
        Com a matriz localizada em Joinville, hoje em dia já expandimos para
        mais de 40 cidades ao redor do mundo.
      </SectionTitle>
      <MapCompIndex />
      <Footer />
    </>
  );
};

export default Home;
