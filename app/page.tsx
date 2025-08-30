"use client";
import { Anton } from "next/font/google";
import { InfiniteMovingCards } from "./components/moving-cards";
import { LampComponent } from "./components/lamp";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { toast } from "sonner";

const fontAnton = Anton({
  subsets: ["latin"],
  weight: "400",
});

const clients = [...new Array(8)].map((client, index) => ({
  href: `/Ayesha_ s Portfolio/Logo wgite color/${index + 1}.png`,
}));

const imgrow1 = [...new Array(9)].map((client, index) => {
  if (index === 8) {
    return {
      href: `/41.png`,
    };
  }
  return {
    href: `/${index + 1}.png`,
  };
});
const imgrow2 = [...new Array(8)].map((client, index) => ({
  href: `/${index + 9}.png`,
}));
const imgrow3 = [...new Array(8)].map((client, index) => ({
  href: `/${index + 17}.png`,
}));
const imgrow4 = [...new Array(8)].map((client, index) => ({
  href: `/${index + 25}.png`,
}));
const imgrow5 = [...new Array(8)].map((client, index) => ({
  href: `/${index + 33}.png`,
}));

export default function Page():React.JSX.Element {
  const HandleCopy = async () => {
    await navigator.clipboard.writeText("ayeshaliaqat.designer@gmail.com");
    toast("Email Copied!");
  };
  return (
    <div className="2xl:w-[1532px] w-full justify-self-center text-white">
      <div>
        <div
          className={` flex items-center justify-center flex-col gap-12 my-15 ${fontAnton.className}`}
        >
          <div className="lg:text-4xl text-3xl">Ayesha Liaqat</div>
          <div className="2xl:text-[130px] lg:text-[100px] md:text-[77px] text-[40px] flex items-center justify-center flex-col">
            <div>You're Welcome to My</div>
            <div className="text-[#B97FF0] 2xl:mt-[-60] lg:mt-[-50] md:mt-[-35] mt-[-15]">
              Design Playground
            </div>
          </div>
        </div>
        <div className="w-full overflow-hidden">
          <InfiniteMovingCards
            className="my-0 border-2 justify-self-center"
            items={clients}
            direction="right"
            speed="slow"
          />
        </div>
        <section>
          <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-12 my-10 px-5">
            <div className="flex flex-col 2xl:gap-12 lg:gap-10 md:gap-8 gap-4">
              {imgrow1 &&
                imgrow1.map((item, index) => (
                  <div
                    key={index}
                    className="hover:scale-104 transition-all cursor-pointer"
                  >
                    {" "}
                    <img
                    className="rounded-[4px]"
                    src={`/Ayesha_ s Portfolio/${item.href}`} alt="" />
                  </div>
                ))}
            </div>
            <div className="flex flex-col 2xl:gap-12 lg:gap-10 md:gap-8 gap-4">
              {imgrow2 &&
                imgrow2.map((item, index) => (
                  <div
                    key={index}
                    className="hover:scale-104 transition-all cursor-pointer"
                  >
                    {" "}
                    <img
                    className="rounded-[4px]"
                    src={`/Ayesha_ s Portfolio/${item.href}`} alt="" />
                  </div>
                ))}
            </div>
            <div className="flex flex-col 2xl:gap-12 lg:gap-10 md:gap-8 gap-4">
              {imgrow3 &&
                imgrow3.map((item, index) => (
                  <div
                    key={index}
                    className="hover:scale-104 transition-all cursor-pointer"
                  >
                    {" "}
                    <img
                    className="rounded-[4px]"
                    src={`/Ayesha_ s Portfolio/${item.href}`} alt="" />
                  </div>
                ))}
            </div>
            <div className="flex flex-col 2xl:gap-12 lg:gap-10 md:gap-8 gap-4">
              {imgrow4 &&
                imgrow4.map((item, index) => (
                  <div
                    key={index}
                    className="hover:scale-104 transition-all cursor-pointer"
                  >
                    {" "}
                    <img 
                    className="rounded-[4px]"
                    src={`/Ayesha_ s Portfolio/${item.href}`} alt="" />
                  </div>
                ))}
            </div>
            <div className="flex flex-col 2xl:gap-12 lg:gap-10 md:gap-8 gap-4">
              {imgrow5 &&
                imgrow5.map((item, index) => (
                  <div
                    key={index}
                    className="hover:scale-104 transition-all cursor-pointer"
                  >
                    {" "}
                    <img 
                    className="rounded-[4px]"
                    src={`/Ayesha_ s Portfolio/${item.href}`} alt="" />
                  </div>
                ))}
            </div>
          </div>
        </section>
      </div>
      <div className="my-20 space-y-14 px-6">
        <div
          className={`2xl:text-[110px] lg:text-[90px] md:text-[70px] text-[34px] flex items-center justify-center flex-col ${fontAnton.className}`}
        >
          <div>Heyo, I’m Ayesha </div>
        </div>
        <div className="lg:w-[1000px] w-full justify-self-center text-center md:text-2xl text-xl space-y-5">
          <div>
            A designer who believes emails are more than just messages in an
            inbox. They’re stories, emotions, and connections waiting to happen.
            Over the years, I’ve helped brands generate over $1M+ in revenue
            through designs that don’t just look good, but feel good and perform
            even better. My mission: helping brands shine brighter and connect
            deeper with their audiences — globally.
          </div>
          <div>
            Feel free to drop me an email at{" "}
            <span className="font-bold">ayeshaliaqat.designer@gmail.com</span> —
            I’ll reply within 48 business hours. For a quicker hello, you can
            also send me a DM on Facebook or LinkedIn (links below).
          </div>
        </div>
        <div className={`justify-self-center ${fontAnton.className}`}>
          <button
            onClick={HandleCopy}
            className="relative inline-flex overflow-hidden rounded-full p-[4px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#50108C] hover:bg-[#50108C]/80 px-25 py-6 md:text-4xl text-2xl font-medium text-white backdrop-blur-3xl">
              LET’S GET STARTED
            </span>
          </button>
        </div>
        <div className={`justify-self-center flex flex-col items-center gap-5`}>
          <div
            className={`md:text-5xl  text-4xl flex items-center justify-center flex-col ${fontAnton.className}`}
          >
            Say Hi
          </div>
          <div className="flex gap-6">
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100090534010476"
            >
              <FaFacebookSquare size={60} color="#BA83ED" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/ayesha-liaqat/"
            >
              <FaLinkedin size={60} color="#BA83ED" />
            </a>
          </div>
        </div>
        <div className="text-center md:text-xl text-lg">
          © 2025 Ayesha liaqat. All Rights Reserved
        </div>
      </div>
    </div>
  );
}
