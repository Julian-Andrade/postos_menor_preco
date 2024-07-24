import GasStationItem from "./gas-station-item";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { CardContent } from "../ui/card";
import { GasStation } from "./seed";

interface GasStationListProps {
  gas_station: GasStation[];
}

const GasStationList = ({ gas_station }: GasStationListProps) => {
  return (
    <>
      <Carousel
        className="mx-auto mb-4 w-full max-w-[1210px] px-6"
        opts={{
          align: "start",
        }}
      >
        <CarouselContent>
          {gas_station.map((gasStation) => (
            <CarouselItem key={gasStation.name} className="basis-[34%]">
              <CardContent className="flex items-center justify-center">
                <GasStationItem {...gasStation} />
              </CardContent>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
};

export default GasStationList;
