import {COMPANY} from '../../util/enums';

export const ChuoLineRapide: Line = {
  company: COMPANY.JR_EAST,
  name: {
    english: 'Chūō Line (Rapid)',
    kanji: '中央線快速',
    hiragana: 'ちゅうおうせん かいそく',
  },
  color: '#fe642e',
  loop: false,
  stations: [
    {
      code: 'TYO',
      numbering: 'JC01',
      name: {
        english: 'Tokyo',
        kanji: '東京',
        hiragana: 'とうきょう',
      },
      areaNotations: [{letter: '山'}, {letter: '区', fill: true}],
      melodyUrl: '//morgansleeper.github.io/Yamanotes/audio/sh3.mp3',
    },
    {
      numbering: 'JC02',
      code: 'KND',
      name: {
        english: 'Kanda',
        kanji: '神田',
        hiragana: 'かんだ',
      },
      melodyUrl: '//morgansleeper.github.io/Yamanotes/audio/seseragi.mp3',
      areaNotations: [{letter: '山'}, {letter: '区', fill: true}],
    },
    {
      numbering: 'JC03',
      name: {
        english: 'Ochanomizu',
        kanji: '御茶ノ水',
        hiragana: 'おちゃのみず',
      },
      areaNotations: [{letter: '山'}, {letter: '区', fill: true}],
    },
    {
      numbering: 'JC04',
      name: {
        english: 'Yotsuya',
        kanji: '四ツ谷',
        hiragana: 'よつや',
      },
      areaNotations: [{letter: '山'}, {letter: '区', fill: true}],
    },
    {
      numbering: 'JC05',
      code: 'SJK',
      name: {
        english: 'Shinjuku',
        kanji: '新宿',
        hiragana: 'しんじゅく',
      },
      areaNotations: [{letter: '山'}, {letter: '区', fill: true}],
      melodyUrl: '//morgansleeper.github.io/Yamanotes/audio/aratana.mp3',
    },
    {
      numbering: 'JC06',
      name: {
        english: 'Nakano',
        kanji: '中野',
        hiragana: 'なかの',
      },
      areaNotations: [{letter: '区', fill: true}],
    },
    {
      numbering: 'JC07',
      name: {
        english: 'Kōenji',
        kanji: '高円寺',
        hiragana: 'こうえんじ',
      },
      areaNotations: [{letter: '区', fill: true}],
    },
    {
      numbering: 'JC08',
      name: {
        english: 'Asagaya',
        kanji: '阿佐ケ谷',
        hiragana: 'あさがや',
      },
      areaNotations: [{letter: '区', fill: true}],
    },
    {
      numbering: 'JC09',
      name: {
        english: 'Ogikubo',
        kanji: '荻窪',
        hiragana: 'おぎくぼ',
      },
      areaNotations: [{letter: '区', fill: true}],
    },
    {
      numbering: 'JC10',
      name: {
        english: 'Nishi-Ogikubo',
        kanji: '西荻窪',
        hiragana: 'にしおぎくぼ',
      },
      areaNotations: [{letter: '区', fill: true}],
    },
    {
      numbering: 'JC11',
      name: {
        english: 'Kichijōji',
        kanji: '吉祥寺',
        hiragana: 'きちじょうじ',
      },
    },
    {
      numbering: 'JC12',
      name: {
        english: 'Mitaka',
        kanji: '三鷹',
        hiragana: 'さんたか',
      },
    },
    {
      numbering: 'JC13',
      name: {
        english: 'Musashi-Sakai',
        kanji: '武蔵境',
        hiragana: 'むさしさかい',
      },
    },
    {
      numbering: 'JC14',
      name: {
        english: 'Higashi-Koganei',
        kanji: '東小金井',
        hiragana: 'ひがしこがねい',
      },
    },
    {
      numbering: 'JC15',
      name: {
        english: 'Musashi-Koganei',
        kanji: '武蔵小金井',
        hiragana: 'むさしこがねい',
      },
    },
    {
      numbering: 'JC16',
      name: {
        english: 'Kokubunji',
        kanji: '国分寺',
        hiragana: 'こくぶんじ',
      },
    },
    {
      numbering: 'JC17',
      name: {
        english: 'Nishi-Kokubunji',
        kanji: '西国分寺',
        hiragana: 'さいこくふんじ',
      },
    },
    {
      numbering: 'JC18',
      name: {
        english: 'Kunitachi',
        kanji: '国立',
        hiragana: 'こくりつ',
      },
    },
    {
      numbering: 'JC19',
      name: {
        english: 'Tachikawa',
        kanji: '立川',
        hiragana: 'たちかわ',
      },
    },
    {
      numbering: 'JC20',
      name: {
        english: 'Hino',
        kanji: '日野',
        hiragana: 'ひの',
      },
    },
    {
      numbering: 'JC21',
      name: {
        english: 'Toyoda',
        kanji: '豊田',
        hiragana: 'とよだ',
      },
    },
    {
      numbering: 'JC22',
      name: {
        english: 'Hachiōji',
        kanji: '八王子',
        hiragana: 'はちおうじ',
      },
    },
    {
      numbering: 'JC23',
      name: {
        english: 'Nishi-Hachiōji',
        kanji: '西八王子',
        hiragana: 'にしはちおうじ',
      },
    },
    {
      numbering: 'JC24',
      name: {
        english: 'Takao',
        kanji: '高尾',
        hiragana: 'たかお',
      },
    },
  ],
};
