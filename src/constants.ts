// This file will eventuall be replaced by API calls

import { StaticImageData } from "next/image";
import {
  SI,
  FAZE,
  FURIA,
  OXG,
  RCAC,
  SSG,
  BDS,
  FLCN,
  NWNTD,
  Bank,
  Border,
  Chalet,
  Clubhouse,
  Consulate,
  Kafe,
  Labs,
  Lair,
  Skyscraper,
} from "../public";

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
  {
    slug: "1237",
    logo_team_1: BDS,
    symbol_team_1: "BDS",
    score_team_1: 2,
    logo_team_2: FURIA,
    symbol_team_2: "FURIA",
    score_team_2: 0,
    symbol_tourney: "SI",
    logo_tourney: SI,
    date: "15.02.25",
  },
  {
    slug: "1238",
    logo_team_1: SSG,
    symbol_team_1: "SSG",
    score_team_1: 0,
    logo_team_2: FAZE,
    symbol_team_2: "FAZE",
    score_team_2: 2,
    symbol_tourney: "SI",
    logo_tourney: SI,
    date: "15.02.25",
  },
  {
    slug: "1239",
    logo_team_1: RCAC,
    symbol_team_1: "RCAC",
    score_team_1: 0,
    logo_team_2: NWNTD,
    symbol_team_2: "NWNTD",
    score_team_2: 2,
    symbol_tourney: "SI",
    logo_tourney: SI,
    date: "15.02.25",
  },
  {
    slug: "1240",
    logo_team_1: FLCN,
    symbol_team_1: "FLCN",
    score_team_1: 1,
    logo_team_2: FAZE,
    symbol_team_2: "FAZE",
    score_team_2: 2,
    symbol_tourney: "SI",
    logo_tourney: SI,
    date: "12.02.25",
  },
  {
    slug: "1241",
    logo_team_1: OXG,
    symbol_team_1: "OXG",
    score_team_1: 0,
    logo_team_2: NWNTD,
    symbol_team_2: "NWNTD",
    score_team_2: 2,
    symbol_tourney: "SI",
    logo_tourney: SI,
    date: "12.02.25",
  },
  {
    slug: "1242",
    logo_team_1: SSG,
    symbol_team_1: "SSG",
    score_team_1: 1,
    logo_team_2: BDS,
    symbol_team_2: "BDS",
    score_team_2: 2,
    symbol_tourney: "SI",
    logo_tourney: SI,
    date: "12.02.25",
  },
  {
    slug: "1243",
    logo_team_1: RCAC,
    symbol_team_1: "RCAC",
    score_team_1: 0,
    logo_team_2: FURIA,
    symbol_team_2: "FURIA",
    score_team_2: 2,
    symbol_tourney: "SI",
    logo_tourney: SI,
    date: "12.02.25",
  },
];

export const NAV_LINKS = [
  { id: "", title: "home" },
  { id: "matches", title: "matches" },
  { id: "teams", title: "teams" },
  { id: "tournaments", title: "tournaments" },
];

export const MAP_BANS: MAPBAN[] = [
  { id: 1, map: "Bank", Team: "BDS", image: Bank, option: "pick" },
  { id: 2, map: "Border", Team: "FaZE", image: Border, option: "ban" },
  { id: 3, map: "Chalet", Team: "BDS", image: Chalet, option: "ban" },
  { id: 4, map: "Club", Team: "FaZe", image: Clubhouse, option: "pick" },
  { id: 5, map: "Consulat", Team: "BDS", image: Consulate, option: "ban" },
  { id: 6, map: "Kafe", Team: "FaZe", image: Kafe, option: "ban" },
  { id: 7, map: "Labs", Team: "BDS", image: Labs, option: "pick" },
  { id: 8, map: "Lair", Team: "FaZe", image: Lair, option: "pick" },
  {
    id: 9,
    map: "Sky",
    Team: "BDS",
    image: Skyscraper,
    option: "pick",
  },
];

export type MAPBAN = {
  id: number;
  map: string;
  Team: string;
  image: StaticImageData;
  option: string;
};

export const MATCH_0 = [
  { id: 0, map: "Bank", scoreTeamA: "9", scoreTeamB: "7" },
  { id: 1, map: "Club", scoreTeamA: "5", scoreTeamB: "7" },
  { id: 2, map: "Labs", scoreTeamA: "5", scoreTeamB: "7" },
  { id: 3, map: "Lair", scoreTeamA: "4", scoreTeamB: "7" },
  { id: 4, map: "Sky", scoreTeamA: "-", scoreTeamB: "-" },
];

export const STATS_0: STATS[] = [
  {
    Player: "Solotov",
    EPS: 89,
    KD: "10-13 (-3)",
    Entry: "3-2 (+1)",
    KOST: "56%",
    KPR: 0.62,
    HS: "50%",
  },
  {
    Player: "LikEfac",
    EPS: 92,
    KD: "12-12 (0)",
    Entry: "1-4 (-3)",
    KOST: "50%",
    KPR: 0.75,
    HS: "42%",
  },
  {
    Player: "Shaiiko",
    EPS: 94,
    KD: "10-11 (-1)",
    Entry: "1-2 (-1)",
    KOST: "69%",
    KPR: 0.62,
    HS: "90%",
  },
  {
    Player: "BriD",
    EPS: 144,
    KD: "18-8 (+10)",
    Entry: "1-0 (+1)",
    KOST: "88%",
    KPR: 1.12,
    HS: "44%",
  },
  {
    Player: "Yuzus",
    EPS: 112,
    KD: "14-10 (+4)",
    Entry: "2-0 (+2)",
    KOST: "62%",
    KPR: 0.88,
    HS: "21%",
  },
];

export type STATS = {
  Player: string;
  EPS: number;
  KD: string;
  Entry: string;
  KOST: string;
  KPR: number;
  HS: string;
};
