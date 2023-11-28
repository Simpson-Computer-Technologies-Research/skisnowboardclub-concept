import Image from "next/image";
import ArrowDownSvg from "./svgs/ArrowDown";

export default function Hero() {
  return (
    <>
      <div className="flex flex-row justify-between pt-32 xl:pt-24 w-full h-full">
        <div className="absolute -z-10 lg:z-10 lg:relative lg:h-[30rem] lg:w-[30rem] xl:h-[40rem] xl:w-[40rem] lg:scale-125">
          <Image
            src="/images/hero-image-temp.png"
            alt="hero"
            className="lg:w-auto sm:flex hidden h-[20rem] lg:h-auto sm:ml-10 xl:ml-0 sm:rounded-full xl:rounded-none"
            width={1600}
            height={1600}
            priority={true}
          />
        </div>
        <div className="lg:w-[45rem] px-10 flex flex-col justify-center sm:items-center lg:items-end bg-white/80 p-10 backdrop-blur-xl">
          <h1 className="sm:text-center text-left lg:text-right text-6xl xl:text-7xl font-black text-slate-900">
            Your <span className="font-slate-900 text-blue-600">ultimate</span>{" "}
            snow adventure awaits
            <span className="font-black text-blue-600">!</span>
          </h1>
          <p className="pt-2 text-lg w-4/5 sm:text-center lg:text-right font-light text-slate-400">
            Elevate your winter experience with like-minded riders – Join the
            Ski and Snowboarding Club for{" "}
            <span className="text-slate-500 font-medium">unforgettable</span>{" "}
            slope sessions and mountain memories!
          </p>
          <div className="flex flex-row gap-4 justify-start sm:justify-end sm:items-end">
            <button className="mt-6 rounded-lg bg-blue-600 px-8 py-4 font-semibold tracking-wider text-white shadow-xl hover:bg-blue-700 hover:border-blue-700 border-2 border-blue-600">
              Join us
            </button>
            <button className="mt-6 rounded-lg border-2 border-blue-600 px-8 py-4 font-semibold tracking-wider text-slate-900 shadow-xl hover:bg-slate-100">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
