import {YamanoteLine} from './yamanote';

export const YamanoteLinePre2020: Line = {
  ...YamanoteLine,
  name: {
    ...YamanoteLine.name,
    english: 'Yamanote Line pre-2020',
  },
  stations: YamanoteLine.stations.filter(({numbering}) => numbering !== 'JY26'),
};
