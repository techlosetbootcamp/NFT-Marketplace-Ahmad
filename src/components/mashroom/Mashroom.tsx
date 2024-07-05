/* eslint-disable react-hooks/exhaustive-deps */
import Button from "../button/Button";
import Eye from "../../assets/icons/eye.png";

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
    <div className=" relative overflow-hidden h-[70vh] lg:h-[70vh] w-full">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://s3-alpha-sig.figma.com/img/a6f4/3f93/50c73503d13e1fe1a0e3277804ef1192?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PeOfPlmge9TDczonIcNgF~3sIPDAKABuZbYyK2oVEIsNBpFXxnyM4b-LueJQiAUfH8hIwrKXfSB-Qa14-QkwV-ArFvT90G3nLCUh0zYPcICpONz7Bs4zFSQQl6c8Izgkyto5Zell~-Cmaw7r4Aiqj-OOQ276OHn55j2s4p2IIfJJ-6052adAkLTYfa5khwAEExGApu~ymnB5rQY47Yo7gQV676nAV1hB3lh4Sju6kTwLeJZOfUs0cGmEdTTAorsGdTfaMjpClLrddFWnN0K38Vuarnsk0zwvWLZ4t1N-9FoNlj-SrznS5oVbq07v4aCauCKn~5LRN4-Ckd9V60hHDA__')",
        }}
      ></div>
      <div className="absolute  inset-0 bg-gradient-to-t from-primary-btn-color to-transparent"></div>
      <div className="absolute   w-full md:bottom-12 bottom-2  lg:bottom-20 z-30 text-white p-4">
        <div className="flex px-12 items-center justify-around  lg-flex-row md:flex-row flex-col gap-8 ">
          <div className="w-full">
            <h1 className="lg:text-6xl md:text-5xl text-5xl py-4  lg:pb-10 md:pb-5 font-bold text-white">
              Magic Mashrooms
            </h1>
            <span className="py-8 md:py-4">
              <Button
                img={Eye}
                imgAlt="Eye"
                bgWhite
                textBlack
                text="See Nfts"
              />
            </span>
          </div>
          <div className="rounded-2xl  w-full bg-secondry-bg-color/80 p-6">
            <h1 className="text-sm md:text-xl font-extralight font-mono">
              Auction ends in:
            </h1>
            <p className="lg:text-7xl md:text-4xl text-3xl font-bold py-4">
              {String(time.hours).padStart(2, "0")} :{" "}
              {String(time.minutes).padStart(2, "0")} :{" "}
              {String(time.seconds).padStart(2, "0")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mashroom;
