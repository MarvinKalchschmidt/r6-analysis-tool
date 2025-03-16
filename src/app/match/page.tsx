import Link from "next/link";
import Image from "next/image";
import LogoA from "../../../public/Team_BDS_logo.png";
import LogoB from "../../../public/FaZe_Clan_logo.png";

export default function Match() {
  return (
    <>
      <section className=" font-bold italic text-[#b5b5b5] leading-[120%] whitespace-nowrap flex flex-col">
        <div className="flex flex-col items-stretch bg-[#0e0d0d] border border-[#181717] rounded-lg">
          <h1 className="text-center">Tournament</h1>
          <h6 className="text-center">Feb 16, 2025 21:30</h6>
          <div className="grid grid-cols-[1fr_auto_1fr] gap-[20px] text-[#dedbd5]">
            <Link
              href="/"
              className="flex flex-row justify-end gap-[10px] items-center decoration-transparent bg-transparent text-[#c29b65] cursor-pointer no-underline"
            >
              <span>Team BDS</span>
              <Image
                src={LogoA}
                width={42}
                alt="LogoA"
                className="object-contain object-center max-w-[48px] max-h-[48px]"
              />
            </Link>
            <p className="flex justify-center items-center"> 1:3</p>
            <Link
              href="/"
              className="flex flex-row justify-start gap-[10px] items-center decoration-transparent bg-transparent text-[#c29b65] cursor-pointer no-underline"
            >
              <Image
                src={LogoB}
                width={42}
                alt="LogoA"
                className="object-contain object-center max-w-[48px] max-h-[48px]"
              />
              <span>Team FaZe Clan</span>
            </Link>
          </div>

          <div className="flex items-center justify-center">Replays</div>
        </div>
      </section>
      <section className="flex flex-col gab-y[15px]">
        <h2>Match summary</h2>
        <div className="flex flex-col gap-5 items-center">
          <h5>Maps</h5>
          <div className="flex flex-wrap gap-6 justify-center"></div>
        </div>
      </section>
    </>
  );
}
