import { cn } from "@/app/_libs/utils";

interface SectionTitleProps {
  title: string;
  description?: string;
  titleClassName?: string;
  divClassName?: string;
}

const SectionTitle = ({
  title,
  description,
  titleClassName,
  divClassName,
}: SectionTitleProps) => {
  return (
    <>
      <div className={cn("container py-10", divClassName)}>
        <h3 className={cn("text-[1.5rem] font-bold text-blue", titleClassName)}>
          {title}
        </h3>

        <p>{description}</p>
      </div>
    </>
  );
};

export default SectionTitle;
