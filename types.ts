'use strict';

// type tShowResultList = tShowResult[]

type tShowResult = {
  show: {
    id: number,
    name: string,
    summary: string,
    image: {medium: string};
  }
}

type tShow = {
  id: number,
  name: string,
  summary: string,
  image: string;
};

type tEpisode = {
  id: number,
  name: number,
  season: number,
  number: number;
};

export type { tShow, tEpisode, tShowResult };