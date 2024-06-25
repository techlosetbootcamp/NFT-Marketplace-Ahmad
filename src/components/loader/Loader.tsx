import { useEffect } from "react";
import { ThreeCircles } from "react-loader-spinner";

const Loader = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);
  return (
    <div className="absolute z-[900] inset-0 h-[100vh] w-full flex justify-center items-center bg-[#101010]">
      <ThreeCircles
        visible={true}
        height="100"
        width="100"
        color="#975DE7"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
