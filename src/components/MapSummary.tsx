import { MAP_BANS, MAPBAN, MATCH_0, STATS_0 } from "@/constants";
import MatchScore from "@/components/MatchScore";
import PlayerMapStats from "./PlayerMapStats";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { StaticImageData } from "next/image";

interface MapSummaryProps {
  teamA: string;
  teamALogo: StaticImageData;
  scoreTeamA: string;
  teamB: string;
  teamBLogo: StaticImageData;
  scoreTeamB: string;
  mapBan: MAPBAN[];
}

export default function MapSummary({
  teamA,
  teamALogo,
  scoreTeamA,
  teamB,
  teamBLogo,
  scoreTeamB,
  mapBan,
}: MapSummaryProps) {
  const [showTable1, setShowTable1] = useState(false);

  const toggleTable1 = () => {
    setShowTable1(!showTable1);
  };
  return (
    <section>
      <div className="flex flex-col gap-y-3">
        <div className="grid grid-cols-[1fr_auto_1fr] bg-[#0e0d0d] border border-[#181717] rounded-lg p-5 gap-x-[4vw]">
          <div className="flex flex-col col-start-1 whitespace-nowrap">
            <span className="font-bold italic tracking-[.3px] text-2xl text-[#dedbd5]">
              {mapBan[0].map}
            </span>
            <span className="text-[#ffc271] font-['Roboto'] font-light text-base">
              Karte #1
            </span>
          </div>
          <MatchScore
            TeamA={teamA}
            TeamALogo={teamALogo}
            scoreTeamA={scoreTeamA}
            TeamB={teamB}
            TeamBLogo={teamBLogo}
            scoreTeamB={scoreTeamB}
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
    </section>
  );
}
