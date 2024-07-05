import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import logo from "../../assets/icons/logo.png";
import userLogo from "../../assets/icons/userLogo.png";
import Button from "../button/Button";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <>
      <div className="fixed z-[100] w-full top-0 bg-primary-bg-color shadow-lg">
        <div className=" px-3 py-4 flex items-center justify-between ">
          <div>
            <Link to={"/"}>
              <img
                className="sm:[50px]   md:block md:w-[170px] lg:w-[240px]"
                src={logo}
                alt="logo"
              />
            </Link>
          </div>
          <div className="hidden md:flex justify-center items-center gap-8">
            <span className="text-white font-semibold">
              <Link to={"/collections"}>Collections</Link>
            </span>
            <span className="text-white font-semibold cursor-not-allowed">
              Rankings
            </span>
            <span className="text-white font-semibold cursor-not-allowed">
              Connect a wallet
            </span>
            <Button
              img={userLogo}
              text="Sign up"
              imgAlt="user"
              bgPurple
              border
              widthFit
            />
          </div>
          <div onClick={() => setNav(!nav)} className="md:hidden">
            {!nav ? (
              <HiMenuAlt3 color="white" size={30} />
            ) : (
              <AiOutlineClose color="white" size={30} />
            )}
          </div>
        </div>

        <div
          className={
            nav
              ? "fixed md:hidden  top-0 left-0 bg-dark-bg-color w-[70%] h-screen duration-1000 z-20"
              : "fixed md:hidden z-[100] top-0 left-[-100%] bg-dark-bg-color w-[70%] h-screen duration-1000"
          }
        >
          <div className=" px-4 py-2 h-screen">
            <div>
              <img className="w-[200px]" src={logo} alt="logo" />
            </div>
            <div className="mt-10 flex flex-col justify-center gap-8 ">
              <span className="text-white text-sm font-semibold">
                <Link to={"/collections"}> Collections</Link>
              </span>
              <span className="text-white text-sm font-semibold">Rankings</span>
              <span className="text-white text-sm font-semibold">
                Connect a wallet
              </span>
            </div>
            <div className="mt-8">
              <Button
                img={userLogo}
                text="Sign up"
                imgAlt="user"
                bgPurple
                border
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
