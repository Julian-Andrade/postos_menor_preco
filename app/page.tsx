import Image from "next/image";
import ProductList from "./_components/product/product-list";
import SectionTitle from "./_components/title/section-title";
import History from "./_components/history/history";

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

      <SectionTitle title="Rede de Postos" />
    </>
  );
};

export default Home;
