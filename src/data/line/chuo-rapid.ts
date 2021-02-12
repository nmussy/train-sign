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
        hangul: '도쿄',
        jiantizi: '东京',
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
        hangul: '칸다',
        jiantizi: '神田',
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
        hangul: '오차 노 미즈',
        jiantizi: '御茶水',
      },
      areaNotations: [{letter: '山'}, {letter: '区', fill: true}],
    },
    {
      numbering: 'JC04',
      name: {
        english: 'Yotsuya',
        kanji: '四ツ谷',
        hiragana: 'よつや',
        hangul: '요 쓰야',
        jiantizi: '四谷',
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
        hangul: '신주쿠',
        jiantizi: '新宿',
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
        hangul: '나카노',
        jiantizi: '中野',
      },
      areaNotations: [{letter: '区', fill: true}],
    },
    {
      numbering: 'JC07',
      name: {
        english: 'Kōenji',
        kanji: '高円寺',
        hiragana: 'こうえんじ',
        hangul: '고 엔지',
        jiantizi: '小圆寺',
      },
      areaNotations: [{letter: '区', fill: true}],
    },
    {
      numbering: 'JC08',
      name: {
        english: 'Asagaya',
        kanji: '阿佐ケ谷',
        hiragana: 'あさがや',
        hangul: '아사',
        jiantizi: '朝谷屋',
      },
      areaNotations: [{letter: '区', fill: true}],
    },
    {
      numbering: 'JC09',
      name: {
        english: 'Ogikubo',
        kanji: '荻窪',
        hiragana: 'おぎくぼ',
        hangul: '오기 쿠보',
        jiantizi: '小久保',
      },
      areaNotations: [{letter: '区', fill: true}],
    },
    {
      numbering: 'JC10',
      name: {
        english: 'Nishi-Ogikubo',
        kanji: '西荻窪',
        hiragana: 'にしおぎくぼ',
        hangul: '니시 오기 쿠보',
        jiantizi: '西久保久',
      },
      areaNotations: [{letter: '区', fill: true}],
    },
    {
      numbering: 'JC11',
      name: {
        english: 'Kichijōji',
        kanji: '吉祥寺',
        hiragana: 'きちじょうじ',
        hangul: '키치 죠지',
        jiantizi: '吉祥寺',
      },
    },
    {
      numbering: 'JC12',
      name: {
        english: 'Mitaka',
        kanji: '三鷹',
        hiragana: 'さんたか',
        hangul: '미타카',
        jiantizi: '三鹰',
      },
    },
    {
      numbering: 'JC13',
      name: {
        english: 'Musashi-Sakai',
        kanji: '武蔵境',
        hiragana: 'むさしさかい',
        hangul: '武蔵境',
        jiantizi: '武藏境',
      },
    },
    {
      numbering: 'JC14',
      name: {
        english: 'Higashi-Koganei',
        kanji: '東小金井',
        hiragana: 'ひがしこがねい',
        hangul: '히가시 코가 네이',
        jiantizi: '东小金井',
      },
    },
    {
      numbering: 'JC15',
      name: {
        english: 'Musashi-Koganei',
        kanji: '武蔵小金井',
        hiragana: 'むさしこがねい',
        hangul: '무사시 코가 네이',
        jiantizi: '武藏小金井',
      },
    },
    {
      numbering: 'JC16',
      name: {
        english: 'Kokubunji',
        kanji: '国分寺',
        hiragana: 'こくぶんじ',
        hangul: '코쿠 분지',
        jiantizi: '国分寺',
      },
    },
    {
      numbering: 'JC17',
      name: {
        english: 'Nishi-Kokubunji',
        kanji: '西国分寺',
        hiragana: 'さいこくふんじ',
        hangul: '西国分寺',
        jiantizi: '锦久文治',
      },
    },
    {
      numbering: 'JC18',
      name: {
        english: 'Kunitachi',
        kanji: '国立',
        hiragana: 'こくりつ',
        hangul: '국립',
        jiantizi: '国民',
      },
    },
    {
      numbering: 'JC19',
      name: {
        english: 'Tachikawa',
        kanji: '立川',
        hiragana: 'たちかわ',
        hangul: '다 치카와',
        jiantizi: '立川',
      },
    },
    {
      numbering: 'JC20',
      name: {
        english: 'Hino',
        kanji: '日野',
        hiragana: 'ひの',
        hangul: '히노',
        jiantizi: '日野',
      },
    },
    {
      numbering: 'JC21',
      name: {
        english: 'Toyoda',
        kanji: '豊田',
        hiragana: 'とよだ',
        hangul: '도요타',
        jiantizi: '丰田汽车',
      },
    },
    {
      numbering: 'JC22',
      name: {
        english: 'Hachiōji',
        kanji: '八王子',
        hiragana: 'はちおうじ',
        hangul: '하치 오지',
        jiantizi: '八王子',
      },
    },
    {
      numbering: 'JC23',
      name: {
        english: 'Nishi-Hachiōji',
        kanji: '西八王子',
        hiragana: 'にしはちおうじ',
        hangul: '서부 하치 오지',
        jiantizi: '西八王子',
      },
    },
    {
      numbering: 'JC24',
      name: {
        english: 'Takao',
        kanji: '高尾',
        hiragana: 'たかお',
        hangul: '다카오',
        jiantizi: '高尾',
      },
    },
  ],
};
