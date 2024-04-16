'use strict';



type tShowResult = {
  show: {
    id: number,
    name: string,
    summary: string,
    image: { medium: string; } | null;
  };
};

type tShow = {
  id: number,
  name: string,
  summary: string,
  image: string;
};

type tEpisodeResult = {
  id: number,
  name: string,
  season: number,
  number: number;
};

type tEpisode = {
  id: number,
  name: string,
  season: number,
  number: number;
};



export type { tShow, tEpisode, tShowResult, tEpisodeResult };