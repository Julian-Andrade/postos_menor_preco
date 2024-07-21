import Image from "next/image";
import SectionTitle from "../title/section-title";

const History = () => {
  return (
    <div id="nossa_historia" className="h-96 bg-gray-50">
      <SectionTitle title="Nossa História" divClassName="py-7" />
      <div className="container flex items-center justify-center">
        <div className="basis-1/2">
          <p>
            A Menor Preço foi criada por um frentista com visão empreendedora,
            determinado a oferecer aos clientes combustível de alta qualidade a
            um preço justo. Sua proatividade o levou a se tornar gerente do
            posto onde trabalhava.
          </p>
          <p>
            Alguns anos depois, ele decidiu deixar o emprego para abrir seu
            próprio posto em 1988. O desejo de expandir seu negócio foi
            transmitido de geração em geração, culminando na fundação da Rede
            Menor Preço. Desde então, o grupo tem conquistado a confiança dos
            clientes, mantendo seu compromisso de fornecer combustível de
            qualidade a preços competitivos.
          </p>
        </div>

        <div className="flex basis-1/2 items-center justify-center">
          <Image
            src="/logo_branco.webp"
            alt="Rede Menor Preço"
            height={300}
            width={400}
          />
        </div>
      </div>
    </div>
  );
};

export default History;
