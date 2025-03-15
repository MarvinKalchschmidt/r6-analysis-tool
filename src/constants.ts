// This file will eventuall be replaced by API calls

import { StaticImageData } from "next/image";
import { SI, FAZE, FURIA, OXG, RCAC, SSG, BDS, FLCN, NWNTD } from "../public";

export type Score = {
  slug: string;
  logo_team_1: StaticImageData;
  symbol_team_1: string;
  score_team_1: number;
  logo_team_2: StaticImageData;
  symbol_team_2: string;
  score_team_2: number;
  symbol_tourney: string;
  logo_tourney: StaticImageData;
  date: string;
};

export const SCORES: Score[] = [
  {
    slug: "1234",
    logo_team_1: BDS,
    symbol_team_1: "BDS",
    score_team_1: 1,
    logo_team_2: FAZE,
    symbol_team_2: "FAZE",
    score_team_2: 3,
    symbol_tourney: "SI",
    logo_tourney: SI,
    date: "17.02.25",
  },
  {
    slug: "1235",
    logo_team_1: FURIA,
    symbol_team_1: "FURIA",
    score_team_1: 0,
    logo_team_2: FAZE,
    symbol_team_2: "FAZE",
    score_team_2: 2,
    symbol_tourney: "SI",
    logo_tourney: SI,
    date: "16.02.25",
  },
  {
    slug: "1236",
    logo_team_1: FAZE,
    symbol_team_1: "FAZE",
    score_team_1: 2,
    logo_team_2: NWNTD,
    symbol_team_2: "NWNTD",
    score_team_2: 0,
    symbol_tourney: "SI",
    logo_tourney: SI,
    date: "16.02.25",
  },
];
