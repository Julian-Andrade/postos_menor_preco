// Utils
import Image from "next/image";
import { GasStation } from "./seed";
import { Card } from "../ui/card";
import { Badge } from "../badge/badge";

interface GasStationItemProps extends GasStation {
  className?: string;
}

const GasStationItem: React.FC<GasStationItemProps> = ({ ...props }) => {
  const { name, src, fuel, services, address, opening } = props;

  return (
    <>
      <Card className="relative flex w-full min-w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
        <div className="bg-blue-gray-500 shadow-blue-gray-500/40 relative mx-4 mt-4 overflow-hidden rounded-xl bg-clip-border text-white shadow-lg">
          <Image
            src={src}
            alt={name}
            width={500}
            height={500}
            quality={100}
            className="z-0 rounded-lg object-cover shadow-lg group-hover:opacity-30"
          />

          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
        </div>

        <div className="p-4">
          <div className="mb-3 flex items-center justify-between">
            <h5 className="block text-xl font-bold text-blue">{name}</h5>
          </div>
          <p className="rounded-xl bg-white p-1 text-xs font-semibold text-blue">
            Combustível
          </p>
          <Badge nameBadge={fuel} />
          <p className="rounded-xl bg-white p-1 text-xs font-semibold text-blue">
            Serviços
          </p>
          <Badge nameBadge={services} />
          <p className="rounded-xl bg-white p-1 text-xs font-semibold text-blue">
            Endereço
          </p>
          <p className="w-[50%] rounded-xl bg-gray-50 px-3 py-1 text-[10px] font-semibold text-gray-500">
            {address}
          </p>
          <p className="rounded-xl bg-white p-1 text-xs font-semibold text-blue">
            Horário de Funcionamento
          </p>
          <p className="w-[50%] rounded-xl bg-gray-50 px-3 py-1 text-[10px] font-semibold text-gray-500">
            {opening}
          </p>
        </div>
      </Card>
    </>
  );
};

export default GasStationItem;
