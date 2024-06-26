interface CategorieCardProps {
  img: string;
  imgAlt: string;
  title: string;
}
const CategorieCard: React.FC<CategorieCardProps> = ({
  img,
  title,
  imgAlt,
}) => {
  return (
    <div className=" rounded-3xl mx-auto bg-secondry-bg-color">
      <img src={img} alt={imgAlt} />
      <p className="py-4 px-3 text-2xl font-medium text-white">{title}</p>
    </div>
  );
};

export default CategorieCard;
