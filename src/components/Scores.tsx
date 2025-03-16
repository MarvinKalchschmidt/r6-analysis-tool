import Link from "next/link";
import Image from "next/image";
import { SCORES } from "@/constants";

export default function Scores() {
  return (
    <section className="flex justify-between items-center w-full list-none gap-1">
      {SCORES.map((score) => (
        <Link
          key={score.slug}
          href={`/match/${score.slug}`}
          className="flex flex-col bg-(--secondary) p-4 w-full"
        >
          <div className="flex flex-col gap-3">
            <div className="flex justify-center items-center gap-1.5 text-sm">
              <Image
                src={score.logo_tourney}
                alt={score.symbol_tourney}
                width={20}
                height={20}
              />
              <p className="grow">{score.symbol_tourney}</p>
              <span>{score.date}</span>
            </div>
            <div className="flex justify-center items-center gap-1.5">
              <Image
                src={score.logo_team_1}
                alt={score.symbol_team_1}
                width={20}
                height={20}
              />
              <p className="font-bold grow">{score.symbol_team_1}</p>
              <span className="font-bold tabular-nums text-(--orange)">
                {score.score_team_1}
              </span>
            </div>
            <div className="flex justify-center items-center gap-1.5">
              <Image
                src={score.logo_team_2}
                alt={score.symbol_team_2}
                width={20}
                height={20}
              />
              <p className="font-bold grow">{score.symbol_team_2}</p>
              <span className="font-bold tabular-nums text-(--blue)">
                {score.score_team_2}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
}
