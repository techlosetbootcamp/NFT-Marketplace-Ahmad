import Digest from "../../assets/images/dog.png";
import Envelope from "../../assets/icons/envelope.png";
import Button from "../button/Button";
const WeeklyDigest = () => {
  return (
    <div className="bg-[#3B3B3B] py-10 rounded-3xl px-12 flex flex-col sm:flex-row justify-around gap-4 items-center">
      <div>
        <img src={Digest} alt="Digest" width={500} className="rounded-3xl " />
      </div>
      <div>
        <h1 className="font-semibold text-white py-2 text-2xl md:text-3xl lg:text-4xl">
          Join our weekly digest
        </h1>
        <p className="py-2 text-white font-normal text-sm md:text-xl">
          Get exclusive promotions & updates straight to your inbox.
        </p>
        <p className="my-2 md:mt-10 py-2 text-center bg-white w-full rounded-xl">
          Enter your email
        </p>
        <div className="py-2">
          <Button
            text="Subscribe"
            img={Envelope}
            imgAlt="email"
            bgPurple
            widthFull
          />
        </div>
      </div>
    </div>
  );
};

export default WeeklyDigest;
