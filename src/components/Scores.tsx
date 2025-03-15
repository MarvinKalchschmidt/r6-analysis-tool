import Link from "next/link";

type Score = {
  logo_team_1: string;
  symbol_team_1: string;
  score_team_1: string;
  logo_team_2: string;
  symbol_team_2: string;
  score_team_2: string;
  team2: string;
  date: string;
};

const SCORES: Score[] = [
  {
    logo_team_1: "Team Liquid",
    symbol_team_1: "TL",
    score_team_1: "5",
    logo_team_2: "Team Liquid",
    symbol_team_2: "Team Liquid",
    score_team_2: "Team Liquid",
    team2: "Team Liquid",
    date: "",
  },
];

export default function Scores() {
  return (
    <section>
      <ul className="flex justify-between items-center h-full text-xl font-bold list-none uppercase">
        {SCORES.map((score) => (
          <li className="flex items-center h-full px-8 hover:bg-(--secondary)">
            <Link href={`/${score.logo_team_1}`}>{score.logo_team_1}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
