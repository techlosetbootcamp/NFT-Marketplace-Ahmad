import { IconType } from "react-icons";

interface ButtonProps {
  img?: string;
  imgAlt?: string;
  icon?: IconType;
  text: string;
  bgPurple?: boolean;
  bgWhite?: boolean;
  border?: boolean;
  textBlack?: boolean;
  bgTransparent?: boolean;
  widthFull?: boolean;
  widthFit?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  img: src,
  imgAlt,
  text,
  bgPurple,
  bgWhite,
  border,
  textBlack,
  bgTransparent,
  widthFull,
  widthFit,
  icon: Icon,
  onClick,
}) => {
  const buttonClasses = `
           px-6
           py-2
           rounded-[12px]
           flex
           justify-center
           items-center
           gap-2
           lg:text-base
           max-sm:text-[12px]
           cursor-not-allowed
          ${bgPurple ? "bg-primary-btn-color" : ""}
          ${widthFull ? "w-full" : ""}
          ${widthFit ? "w-fit" : ""}
          ${bgTransparent ? "bg-transparent" : ""}
          ${bgWhite ? "bg-white" : ""}
          ${border ? "border-2 border-primary-btn-color" : ""}
`;
  const textClasses = `
    ${textBlack ? "text-black" : "text-white"}
    font-semibold
    outline-none
    border-none
  `;
  return (
    <button onClick={onClick} className={buttonClasses} disabled>
      <img src={src} alt={imgAlt} className="w-4 text-" />
      {Icon && <Icon size={25} color="white" />}
      <p className={textClasses}>{text}</p>
    </button>
  );
};

export default Button;
