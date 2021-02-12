import {TokaidoWestLine} from './tokaido-west';

export const TokaidoWestLinePre2008: Line = {
  ...TokaidoWestLine,
  name: {
    ...TokaidoWestLine.name,
    english: 'Tōkaidō Main Line (JR West) pre-2008',
  },
  stations: TokaidoWestLine.stations.filter(
    ({numbering}) => !['A33', 'A37', 'A40', 'A53', 'A59'].includes(numbering),
  ),
};
