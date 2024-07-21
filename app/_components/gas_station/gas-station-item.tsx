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
    <Card className="min-w-[320px] border-0">
      <div className="w-full space-y-2">
        <div className="group relative aspect-square w-full rounded-xl">
          <div>
            <span className="text-md absolute left-2 top-3 z-10 rounded-xl bg-blue p-1 px-2 font-semibold text-white opacity-100 transition-opacity duration-300 group-hover:opacity-0">
              {name}
            </span>
            <Image
              src={src}
              alt={name}
              fill
              quality={100}
              className="shadow-ld z-0 rounded-lg object-cover group-hover:opacity-30"
            />
          </div>
          <div className="absolute left-2 right-2 top-3 h-full space-y-1 object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <p className="rounded-xl bg-white p-1 px-2 text-xs font-semibold text-blue">
              Combustível
            </p>
            <Badge item={fuel} />
            <p className="rounded-xl bg-white p-1 px-2 text-xs font-semibold text-blue">
              Serviços
            </p>
            <Badge item={services} />
            <p className="rounded-xl bg-white p-1 px-2 text-xs font-semibold text-blue">
              Endereço
            </p>
            <p className="rounded-xl bg-blue px-3 py-1 text-[10px] font-semibold text-white">
              {address}
            </p>
            <p className="rounded-xl bg-white p-1 px-2 text-xs font-semibold text-blue">
              Horário de Funcionamento
            </p>
            <p className="rounded-xl bg-blue px-3 py-1 text-[10px] font-semibold text-white">
              {opening}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default GasStationItem;
