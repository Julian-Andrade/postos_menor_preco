// Utils
import { cn } from "../../_libs/utils";

interface ProductItemProps {
  className?: string;
  label: string;
  bg: string;
}

const ProductItem = ({ className, label, bg }: ProductItemProps) => {
  return (
    <div className={cn("min-w-[360px]", className)}>
      <div className="w-full space-y-2">
        <div className={cn("relative aspect-square w-full rounded-xl", bg)}>
          <span className="text-md absolute left-[10%] top-[72%] font-semibold text-white">
            Menor Preço
          </span>
          <h2 className="absolute left-[10%] top-[80%] text-2xl font-semibold text-white">
            {label}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
