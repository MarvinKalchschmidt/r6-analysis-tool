import Scores from "@/components/Scores";
import { SI, APL, BLAST, EML, NAL, Reload, SAL } from "../../public";
import Grid from "@/components/GridComponents/Grid";
import Tournament from "@/components/Tournament";
import { StaticImageData } from "next/image";

type TournamentProps = {
  id: number;
  logo: StaticImageData;
  name: string;
  date: string;
};

const TOURNAMENTS: TournamentProps[] = [
  {
    id: 1,
    logo: SI,
    name: "Six Invitational 2025",
    date: "17.09.24",
  },
  {
    id: 2,
    logo: Reload,
    name: "RE:L0:AD 2025",
    date: "17.08.24",
  },
  {
    id: 3,
    logo: BLAST,
    name: "BLAST R6 Major 2025",
    date: "17.02.24",
  },
  {
    id: 4,
    logo: SAL,
    name: "South America League 2025 - Stage 1",
    date: "17.07.24",
  },
  {
    id: 5,
    logo: EML,
    name: "Europe MENA League 2025 - Stage 1",
    date: "17.01.24",
  },
  {
    id: 6,
    logo: APL,
    name: "Asia Pacific League 2025 - Stage 1",
    date: "17.03.24",
  },
  {
    id: 7,
    logo: NAL,
    name: "North America League 2025 - Stage 1",
    date: "17.04.24",
  },
];

export default function Home() {
  return (
    <>
      <Scores />
      <section className="mx-auto w-full p-4 md:w-[75%]">
        <Grid>
          {TOURNAMENTS.map((tourney, index) => (
            <Tournament key={index} {...tourney} />
          ))}
        </Grid>
      </section>
    </>
  );
}
