interface BadgeProps {
  item?: string[];
}

const variantColor: { [key: string]: string } = {
  "Gasolina Comum": "bg-orange",
  "Gasolina Aditivada": "bg-red",
  "Diesel S10": "bg-green-secondary",
  Etanol: "bg-green",
  "Gás Natural": "bg-purple",
};

export const Badge = ({ item }: BadgeProps) => {
  return (
    <div className="grid w-full grid-cols-2 items-center gap-1">
      {item &&
        item.map((item, index) => {
          const colorClass = variantColor[item] || "bg-blue";
          return (
            <div
              key={index}
              className={`${colorClass} rounded-xl bg-blue px-3 py-1 text-[10px] font-semibold text-white`}
            >
              {item}
            </div>
          );
        })}
    </div>
  );
};
