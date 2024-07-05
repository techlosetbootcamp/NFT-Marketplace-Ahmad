import { CategoryCardProps } from "../../types/types";
const CategoryCard: React.FC<CategoryCardProps> = ({ img, title, imgAlt }) => {
  return (
    <div className=" rounded-3xl mx-auto bg-secondry-bg-color">
      <img src={img} alt={imgAlt} />
      <p className="py-4 px-3 text-2xl font-medium text-white">{title}</p>
    </div>
  );
};

export default CategoryCard;
