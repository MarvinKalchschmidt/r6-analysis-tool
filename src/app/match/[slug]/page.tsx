"use client";

import Link from "next/link";
import Image from "next/image";
import LogoA from "../../../../public/Team_BDS_logo.png";
import LogoB from "../../../../public/FaZe_Clan_logo.png";
import { MAP_BANS } from "@/constants";
import { BDS, FAZE } from "../../../../public";
import { MATCH_0 } from "@/constants";
import { Plus, Minus } from "lucide-react";
import MatchScore from "@/components/MatchScore";
import { useState } from "react";
import { STATS_0 } from "@/constants";
import PlayerMapStats from "@/components/PlayerMapStats";

export default function Match() {
  const [showTable1, setShowTable1] = useState(false);
  const [showTable2, setShowTable2] = useState(false);
  const [showTable3, setShowTable3] = useState(false);
  const [showTable4, setShowTable4] = useState(false);
  const [showTable5, setShowTable5] = useState(false);

  const toggleTable1 = () => {
    setShowTable1(!showTable1);
  };

  const toggleTable2 = () => {
    setShowTable2(!showTable2);
  };

  return (
    <section className="px-16">
      <div className=" font-bold italic text-[#b5b5b5] leading-[120%] whitespace-nowrap flex flex-col">
        <div className="flex flex-col items-stretch bg-[#0e0d0d] border border-[#181717] rounded-lg">
          <h1 className="text-center">Tournament</h1>
          <h6 className="text-center">Feb 16, 2025 21:30</h6>
          <div className="grid grid-cols-[1fr_auto_1fr] gap-[20px] text-[#dedbd5]">
            <Link
              href="/"
              className="flex flex-row justify-end gap-[10px] items-center decoration-transparent bg-transparent text-[#c29b65] no-underline"
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
              className="flex flex-row justify-start gap-[10px] items-center decoration-transparent bg-transparent text-[#c29b65] no-underline"
            >
              <Image
                src={LogoB}
                width={42}
                alt="LogoA"
                className="object-contain object-center max-w-[48px] max-h-[48px]"
              />
              <span>FaZe Clan</span>
            </Link>
          </div>

          <div className="flex items-center justify-center">Replays</div>
        </div>
      </div>
      <div className="flex flex-col gab-y[15px]">
        <h2 className="font-bold">Match summary</h2>
        <div className="flex flex-col gap-5 items-center">
          <h5>Maps</h5>
          <div className="flex flex-wrap gap-6 justify-center">
            {MAP_BANS.map((thisMap) => (
              <div key={thisMap.id}>
                <Image
                  src={thisMap.image}
                  width={120}
                  alt={thisMap.map}
                  className="object-contain object-center max-w-[120px] max-h-[68px]"
                />
                <div className="flex flex-col gap-1">
                  <span>
                    {thisMap.option}: {thisMap.map}{" "}
                  </span>
                  <span> {thisMap.Team} </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-3">
        <div className="grid grid-cols-[1fr_auto_1fr] bg-[#0e0d0d] border border-[#181717] rounded-lg p-5 gap-x-[4vw]">
          <div className="flex flex-col col-start-1 whitespace-nowrap">
            <span className="font-bold italic tracking-[.3px] text-2xl text-[#dedbd5]">
              {MAP_BANS[0].map}
            </span>
            <span className="text-[#ffc271] font-['Roboto'] font-light text-base">
              Karte # 1
            </span>
          </div>
          <MatchScore
            TeamA="BDS"
            TeamALogo={BDS}
            scoreTeamA={MATCH_0[0].scoreTeamA}
            TeamB="FaZe Clan"
            TeamBLogo={FAZE}
            scoreTeamB={MATCH_0[0].scoreTeamB}
          />
          <div className="flex justify-end items-center">
            <button
              className="p-0 flex items-center justify-center cursor-pointer"
              onClick={toggleTable1}
            >
              {showTable1 ? <Minus size={20} /> : <Plus size={20} />}
            </button>
          </div>
        </div>
        {showTable1 && (
          <div className="flex flex-col justify-center items-center">
            <PlayerMapStats stats={STATS_0} />
            <div>OPERATOR BANS HIER EINFÜGEN</div>
            <div>RUNDENVERLAUFSSTRAHL HIER EINFÜGEN</div>
            <PlayerMapStats stats={STATS_0} />
          </div>
        )}
      </div>
      <div className="flex flex-col gap-y-3">
        <div className="grid grid-cols-[120px_auto_20px] bg-[#0e0d0d] border border-[#181717] rounded-lg p-5 gap-x-[4vw]">
          <div className="flex flex-col col-start-1 whitespace-nowrap">
            <span className="font-bold italic tracking-[.3px] text-2xl text-[#dedbd5]">
              {MAP_BANS[3].map}
            </span>
            <span className="text-[#ffc271] font-['Roboto'] font-light text-base">
              Karte # 1
            </span>
          </div>
          <MatchScore
            TeamA="BDS"
            TeamALogo={BDS}
            scoreTeamA={MATCH_0[1].scoreTeamA}
            TeamB="FaZe Clan"
            TeamBLogo={FAZE}
            scoreTeamB={MATCH_0[1].scoreTeamB}
          />
          <div className="flex justify-end items-center">
            <button
              className="p-0 flex items-center cursor-pointer justify-center"
              onClick={toggleTable2}
            >
              {showTable2 ? <Minus size={20} /> : <Plus size={20} />}
            </button>
          </div>
        </div>
        {showTable2 && <PlayerMapStats stats={STATS_0} />}
      </div>
    </section>
  );
}
