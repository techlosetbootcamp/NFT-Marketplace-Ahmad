interface WorkCardProps {
  src: string;
  alt: string;
  title: string;
  description: string;
}

const WorkCard: React.FC<WorkCardProps> = ({
  src,
  alt,
  title,
  description,
}) => {
  return (
    <div className="bg-[#3B3B3B] text-center sm:w-[300px] w-full rounded-2xl flex items-center flex-row sm:flex-col my-4 gap-4 p-4 ">
      <img src={src} alt={alt} className="w-24 sm:w-full" />
      <h1 className="sm:text-2xl text-xl font-semibold text-white pb-2">
        {title}
      </h1>
      <p className="sm:text-base text-sm font-normal text-white py-2">
        {description}
      </p>
    </div>
  );
};

export default WorkCard;
