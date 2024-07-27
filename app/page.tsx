import Image from "next/image";
import ProductList from "./_components/product/product-list";
import SectionTitle from "./_components/section-title/section-title";
import History from "./_components/history/history";
import GasStationList from "./_components/gas_station/gas-station-list";
import { GAS_STATION } from "./_components/gas_station/seed";
import Contact from "./_components/contact/contact";

const Home = () => {
  return (
    <>
      <div className="bg-blue">
        <div className="container flex items-center justify-center">
          <Image
            src="/banner_01.jpg"
            alt="Qualidade e preço sempre perto de você"
            height={780}
            width={1200}
          />
        </div>
      </div>

      <section id="nossos_produtos">
        <SectionTitle
          title="Nossos Produtos"
          description="A Menor Preço aprimora sua viagem com a excelência e o desempenho da
            nossa linha de combustíveis, para que você continue sempre em
            movimento. Descubra nossa linha completa abaixo e visite seu posto de
            combustível Menor Preço preferido."
          divClassName="space-y-2"
        />
        <ProductList />
      </section>

      <section id="nossa_historia" className="bg-gray-50 pb-12">
        <SectionTitle title="Nossa História" divClassName="py-7" />

        <History />
      </section>

      <section id="rede_de_postos">
        <SectionTitle
          title="Rede de Postos"
          description="A Menor Preço possui uma excelente estrutura para garantir um atendimento de qualidade aos seus clientes. Conheça nossa rede de postos e desfrute de uma experiência excepcional."
          divClassName="space-y-2"
          button
          buttonLabel="Confira todos os postos"
          href="/rede_de_postos"
        />
        <GasStationList gas_station={GAS_STATION} />
      </section>

      <section id="contato" className="bg-gray-50 pb-24">
        <SectionTitle
          title="Contato"
          description="Fale diretamente com a nossa equipe"
        />
        <Contact />
      </section>
    </>
  );
};

export default Home;
