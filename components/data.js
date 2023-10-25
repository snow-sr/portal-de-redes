import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.jpg";
import benefitTwoImg from "../public/img/benefit-two.jpg";

const benefitOne = {
  title: "Coffeenet Plus",
  desc: "O roteador integrado à cafeteira oferece café quente e conectividade perfeita em um único dispositivo. Desperte para um mundo de conveniência e produtividade.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Café Fresco a Qualquer Momento",
      desc: "Desfrute de café fresco e aromático a qualquer hora do dia, sem a necessidade de preparação manual.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Economia de Espaço na Cozinha",
      desc: "Libere espaço na sua bancada com um dispositivo que combina duas funcionalidades essenciais: preparação de café e conectividade à internet.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Controle Inteligente",
      desc: "Através de um aplicativo, ajuste as configurações da sua cafeteira e agende preparações de café, tornando sua rotina matinal mais conveniente.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Ultrarouter 5.5G",
  desc: "Experimente velocidades inigualáveis com nosso inovador roteador 5.5G. Navegação ultra-rápida e conectividade avançada para todos os seus dispositivos.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Velocidade Excepcional",
      desc: "Nosso roteador 5.5G oferece velocidades incríveis, permitindo streaming suave, downloads rápidos e jogos sem atrasos.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Conectividade Universal",
      desc: "Compatível com uma ampla gama de dispositivos, garantindo que todos na sua casa desfrutem de uma conexão sólida e confiável.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Segurança Avançada",
      desc: "Mantenha sua rede protegida com recursos de segurança de última geração, impedindo ameaças e garantindo sua tranquilidade online.",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
