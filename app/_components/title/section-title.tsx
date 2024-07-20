interface SectionTitleProps {
  title: string;
  description?: string;
}

const SectionTitle = ({ title, description }: SectionTitleProps) => {
  return (
    <>
      <div className="container py-10">
        <h3 className="text-[1.5rem] font-bold text-blue">{title}</h3>

        <p>{description}</p>
      </div>
    </>
  );
};

export default SectionTitle;
