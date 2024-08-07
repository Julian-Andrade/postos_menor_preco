import ProductItem from "./product-item";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { CardContent } from "../ui/card";

const PRODUCTS = [
  {
    bg: "bg-[#FF7149]",
    label: "Gasolina Comum",
  },
  {
    bg: "bg-red",
    label: "Gasolina Aditivada",
  },
  {
    bg: "bg-[#698F3F]",
    label: "Etanol",
  },
  {
    bg: "bg-[#ACAA3E]",
    label: "Diesel S10",
  },
  {
    bg: "bg-[#491341]",
    label: "Gás Natural",
  },
];

const ProductList = () => {
  return (
    <>
      <Carousel
        className="mx-auto mb-4 w-full max-w-[1210px] px-6"
        opts={{
          align: "start",
        }}
      >
        <CarouselContent>
          {PRODUCTS.map((item) => (
            <CarouselItem
              key={item.label}
              className="basis-[27%] max-[500px]:basis-[68%]"
            >
              <CardContent className="flex items-center justify-center">
                <ProductItem {...item} />
              </CardContent>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="max-[500px]:hidden" />
        <CarouselNext className="max-[500px]:hidden" />
      </Carousel>
    </>
  );
};

export default ProductList;
