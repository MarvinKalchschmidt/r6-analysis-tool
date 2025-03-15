import Link from "next/link";
import { SCORES } from "@/constants";

export default function Scores() {
  return (
    <section>
      <ul className="flex justify-between items-center h-full text-xl font-bold list-none uppercase">
        {SCORES.map((score) => (
          <li className="flex items-center h-full px-8 hover:bg-(--secondary)">
            <Link href={`/${score.logo_team_1}`}></Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
