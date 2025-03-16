import Scores from "@/components/Scores";
import Grid from "@/components/GridComponents/Grid";
import Tournament from "@/components/Tournament";
import { TOURNAMENTS } from "@/constants";

export default function Home() {
  return (
    <>
      <Scores />
      <section className="mx-auto w-full p-6 md:px-16 xl:w-[75%]">
        <Grid>
          {TOURNAMENTS.map((tourney, index) => (
            <Tournament key={index} {...tourney} />
          ))}
        </Grid>
      </section>
    </>
  );
}
