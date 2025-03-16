import Image, { StaticImageData } from "next/image";

interface MatchScoreProps {
  TeamA: string;
  TeamALogo: StaticImageData;
  scoreTeamA: string;
  TeamB: string;
  TeamBLogo: StaticImageData;
  scoreTeamB: string;
}

export default function MatchScore({
  TeamA,
  TeamALogo,
  scoreTeamA,
  TeamB,
  TeamBLogo,
  scoreTeamB,
}: MatchScoreProps) {
  return (
    <div className="grid grid-cols-[1fr_auto_1fr] gap-x-8 text-[#dedbd5]">
      <div className="flex flex-row justify-end items-center gap-x-2 whitespace-normal text-right text-[#dedbd5] rounded-lg">
        <span className="inline leading-[1.1rem]">{TeamA}</span>

        <Image
          src={TeamALogo}
          width={42}
          alt={TeamALogo.src}
          className="object-contain object-center max-w-[48px] max-h-[48px]"
        />
      </div>
      <div className="flex flex-row justify-center items-center tracking-[.3px] gap-x-2 font-bold italic text-[#b5b5b5] text-3xl">
        {scoreTeamA}
        <span>:</span>
        {scoreTeamB}
      </div>
      <div className="flex flex-row items-center justify-start gap-x-2 whitespace-normal text-left text-[#dedbd5] rounded-lg">
        <Image
          src={TeamBLogo}
          width={42}
          alt={TeamBLogo.src}
          className="object-contain object-center max-w-[48px] max-h-[48px]"
        />

        <span className="inline leading-[1.1rem]">{TeamB}</span>
      </div>
    </div>
  );
}
