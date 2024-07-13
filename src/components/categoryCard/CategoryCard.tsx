import { CategoryCardProps } from "../../types/types";
const CategoryCard: React.FC<CategoryCardProps> = ({ img, title, imgAlt }) => {
  return (
    <div className="rounded-3xl  flex flex-col lg:max-w-[240px] lg:max-h-[316px] md:max-w-[150px] md:max-h-[209px] max-w-[147px] mx-auto justify-center bg-secondry-bg-color">
      <img
        src={img}
        alt={imgAlt}
        className="w-full h-auto lg:max-w-[240px] lg:max-h-[316px] md:max-w-[150px] md:max-h-[209px] max-w-[147px] rounded-t-3xl"
      />
      <p className="pt-5 pb-6 pl-6   lg:text-[22px] md:text-base text-base font-semibold font-workSans text-white">
        {title}
      </p>
    </div>
  );
};

export default CategoryCard;
