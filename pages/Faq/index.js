import Head from "next/head";
import { benefitOne, benefitTwo } from "../../components/data";
import Video from "../../components/video";
import Benefits from "../../components/benefits";
import Footer from "../../components/footer";
import Testimonials from "../../components/testimonials";
import Cta from "../../components/cta";
import Faq from "../../components/faq";
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
      <SectionTitle pretitle="FAQ" title="Perguntas Frequentemente feitas">
        Aqui temos algumas perguntas frequentes que podem te ajudar a entender
        nossos produtos
      </SectionTitle>
      <Faq />
      <Cta />
      <PopupWidget />
      <Footer />
    </>
  );
};

export default Home;
