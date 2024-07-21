import Image from "next/image";
import ProductList from "./_components/product/product-list";
import SectionTitle from "./_components/title/section-title";
import History from "./_components/history/history";
import GasStationList from "./_components/gas_station/gas-station-list";
import { GAS_STATION } from "./_components/gas_station/seed";

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

      <SectionTitle
        title="Nossos Produtos"
        description="A Menor Preço aprimora sua viagem com a excelência e o desempenho da
          nossa linha de combustíveis, para que você continue sempre em
          movimento. Descubra nossa linha completa abaixo e visite seu posto de
          combustível Menor Preço preferido."
        divClassName="space-y-2"
      />

      <ProductList />

      <History />

      <SectionTitle
        title="Rede de Postos"
        description="A Menor Preço possui uma excelente estrutura para garantir um atendimento de qualidade aos seus clientes. Conheça nossa rede de postos e desfrute de uma experiência excepcional."
        divClassName="space-y-2"
        button
        buttonLabel="Confira todos os postos"
        href="/rede_de_postos"
      />

      <GasStationList gas_station={GAS_STATION} />
    </>
  );
};

export default Home;
