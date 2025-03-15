// This file will eventuall be replaced by API calls

import { StaticImageData } from "next/image";
import { SI, FAZE, FURIA, OXG, RCAC, SSG, BDS, FLCN, NWNTD } from "../public";

export type Score = {
  logo_team_1: StaticImageData;
  symbol_team_1: string;
  score_team_1: number;
  logo_team_2: StaticImageData;
  symbol_team_2: string;
  score_team_2: number;
  date: string;
};

export const SCORES: Score[] = [
  {
    logo_team_1: BDS,
    symbol_team_1: "BDS",
    score_team_1: 1,
    logo_team_2: FAZE,
    symbol_team_2: "FAZE",
    score_team_2: 3,
    date: "17.02.25",
  },
];
