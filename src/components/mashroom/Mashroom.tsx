/* eslint-disable react-hooks/exhaustive-deps */
import Button from "../button/Button";
import { eye, shormie } from "../../constants/image";

import { useState, useEffect } from "react";

function Mashroom() {
  const initialTime = { hours: 2, minutes: 45, seconds: 29 };
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        const { hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          return { ...prevTime, seconds: seconds - 1 };
        } else if (minutes > 0) {
          return { hours, minutes: minutes - 1, seconds: 59 };
        } else if (hours > 0) {
          return { hours: hours - 1, minutes: 59, seconds: 59 };
        } else {
          return initialTime;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [time, initialTime]);

  return (
    <div
      className="relative  lg:h-[640px] md:h-[630px] h-[590px] mx-auto bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://s3-alpha-sig.figma.com/img/a6f4/3f93/50c73503d13e1fe1a0e3277804ef1192?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=geIqUT577BJio5UAgfBhUBd3HfSJczwwIwVpxvSnIRAv7ojdusA1vwejFMam2P~HWOF36Kj0hql6HiJC0R2fRoOLQWZaa1QamwrgdirDaZkFtIhvASUJCQyfX0C47GM8X-C9Rscjegf711E-HqEm5J76Wz2lbO0~Mj~lR6ZNlzVDM9UYuSSzCpfXYA7aQtnkXDv4v-C0qmMb8F8u1Kg8amMZ62T3g739bnlhQhk01nUQQ80qP8blBj6e1Z5i~QPGeYtabCO9IhEJr9U~3TU9chhXkBeLyn89thLHqJT8wD97bQ85fdN8grwhkQUC9Zb9hiBfuy1pZ8Y8Y7reZR~Q6w__')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-primary-btn-color to-transparent" />
      <div className="absolute w-full lg:w-[1050px] md:w-[834px] bottom-2 md:bottom-[60px] py-[30px] left-1/2 transform -translate-x-1/2  p-4 lg:p-8 md:px-[40px] px-[30px]">
        <span className="flex items-center gap-2 py-[10px] px-5 bg-secondry-bg-color rounded-[20px]  w-fit">
          <img src={shormie} alt="logo" className="w-6 h-6 rounded-full " />
          <p className="font-workSans text-base text-white font-normal">
            Shormie
          </p>
        </span>
        <div className="flex justify-between md:items-center  items-start md:flex-row flex-col">
          <div className="">
            <h1 className="lg:text-[51px]  font-workSans md:my-0 my-8 lg:leading-[51px] leading-[40px] text-[38px] text-5xl md:py-6   font-semibold text-white">
              Magic Mashrooms
            </h1>
            <span className="py-8 md:py-4 md:block hidden">
              <Button
                img={eye}
                imgAlt="Eye"
                bgWhite
                textBlack
                widthFull
                text="See Nfts"
              />
            </span>
          </div>
          <div className="rounded-[20px] w-full flex flex-col items-center justify-center  md:max-w-[295px] bg-secondry-bg-color/60   text-white p-[30px]">
            <div>
              <h1 className="text-sm md:text-xs font-normal font-spaceMono text-left">
                Auction ends in:
              </h1>
              <p className="lg:text-[38px] font-spaceMono leading-[45px] md:text-4xl text-3xl font-bold py-3">
                {String(time.hours).padStart(2, "0")}:
                {String(time.minutes).padStart(2, "0")}:
                {String(time.seconds).padStart(2, "0")}
              </p>
            </div>
          </div>
          <span className="py-8 md:py-4 md:hidden w-full block">
            <Button
              img={eye}
              imgAlt="Eye"
              bgWhite
              textBlack
              width100
              text="See Nfts"
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Mashroom;
