import React from "react";
import { FaLinkedin, FaTwitter, FaDiscord, FaYoutube } from "react-icons/fa";
import Button from "../button/Button";
import logo from "../../assets/icons/logo.png";
import envelope from "../../assets/icons/envelope.png";

const Footer: React.FC = () => {
  return (
    <div className=" w-full h-full z-10 px-4 py-8 bg-dark-bg-color">
      <div className="flex flex-col md:flex-row md:items-start md:gap-4 md:justify-between">
        <div className="mb-6 md:mb-0 md:w-1/3">
          <img src={logo} alt="logo" className="w-[200px]" />
          <ul className="py-4 text-light">
            <li className="py-2">
              NFT marketplace fetched API's of Opensea and show on here
            </li>
            <li className="py-2">Join our community</li>
            <li className="py-2 flex gap-4">
              <FaYoutube size={25} />
              <FaDiscord size={25} />
              <FaLinkedin size={25} />
              <FaTwitter size={25} />
            </li>
          </ul>
        </div>

        <div className="mb-6 md:mb-0 md:w-1/3">
          <h1 className="text-white font-semibold text-[22px]">Explore</h1>
          <ul className="py-4 text-light">
            <li className="py-2">Marketplace</li>
            <li className="py-2">Rankings</li>
            <li className="py-2">Connect a wallet</li>
          </ul>
        </div>

        <div className="md:w-1/3">
          <h1 className="text-white font-semibold text-[22px]">
            Join our weekly digest
          </h1>
          <ul className="py-4 text-light">
            <li className="py-2">
              Get exclusive promotions & updates straight to your inbox.
            </li>
            <li className="my-2 py-2 text-center bg-white w-full rounded-xl">
              Enter your email
            </li>
            <li className="py-2">
              <Button
                text="Subscribe"
                img={envelope}
                imgAlt="email"
                bgPurple
                widthFull
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full border-t border-white rounded-full mt-6" />
      <div className="mt-4 text-light text-center">
        &copy; Techloset Coding Bootcamp 6.O Created by Ahmad Raza
      </div>
    </div>
  );
};

export default Footer;
