import Lottie from "react-lottie";
import animationData from "./helloworld";

export default function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="mx-40 flex flex-col justify-center">
      <h1 className="mt-20 text-md font-bold underline">
        Simple Animation Render
      </h1>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
}
