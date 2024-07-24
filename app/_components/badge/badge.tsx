import { cn } from "@/app/_libs/utils";

interface BadgeProps {
  nameBadge?: string[];
}

const variantColor: { [key: string]: string } = {
  "Gasolina Comum": "bg-orange text-white",
  "Gasolina Aditivada": "bg-red text-white",
  "Diesel S10": "bg-green-secondary text-white",
  Etanol: "bg-green text-white",
  "Gás Natural": "bg-purple text-white",
};

export const Badge = ({ nameBadge }: BadgeProps) => {
  return (
    <div className="grid w-full grid-cols-2 items-center gap-1">
      {nameBadge?.map((name, index) => {
        const colorClass = variantColor[name] || "bg-gray-50 text-gray-500";
        return (
          <div
            key={index}
            className={cn(
              colorClass,
              "rounded-xl px-3 py-1 text-[10px] font-semibold",
            )}
          >
            {name}
          </div>
        );
      })}
    </div>
  );
};
