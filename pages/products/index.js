import Head from "next/head";
import { benefitOne, benefitTwo } from "../../components/data";
import Benefits from "../../components/benefits";
import Footer from "../../components/footer";
import Testimonials from "../../components/testimonials";
import PopupWidget from "../../components/popupWidget";
import Navbar from "../../components/navbar";
import SectionTitle from "../../components/sectionTitle";

const Home = () => {
  return (
    <>
      <Head>
        <title>ADAM - Routers</title>
        <meta name="description" content="Roteadores do Adamo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Todos aqui podem atestar a qualidade dos nossos produtos"
        title="Veja o que diz quem usa ADAM"
      ></SectionTitle>
      <Testimonials />
      <PopupWidget />
      <Footer />
    </>
  );
};

export default Home;
