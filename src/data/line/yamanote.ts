import baseroute from '../../baseroute';

export const YamanoteLine: Line = {
  name: {
    english: 'Yamanote Line',
    kanji: '山手線',
    hiragana: 'やまのてせん',
  },
  color: '#72c11d',
  loop: true,
  areaNotations: [{letter: '山'}, {letter: '区', fill: true}],
  map: `${baseroute}/assets/line_maps/yamanote.svg`,
  stations: [
    {
      code: 'TYO',
      numbering: 'JY01',
      name: {
        english: 'Tokyo',
        kanji: '東京',
        hiragana: 'とうきょう',
        hangul: '도쿄',
        jiantizi: '东京',
      },
      melodyUrl: '//morgansleeper.github.io/Yamanotes/audio/sh3.mp3',
    },
    {
      code: 'KND',
      numbering: 'JY02',
      name: {
        english: 'Kanda',
        kanji: '神田',
        hiragana: 'かんだ',
        hangul: '칸다',
        jiantizi: '神田',
      },
      melodyUrl: '//morgansleeper.github.io/Yamanotes/audio/seseragi.mp3',
    },
    {
      code: 'AKB',
      numbering: 'JY03',
      name: {
        english: 'Akihabara',
        kanji: '秋葉原',
        hiragana: 'あきはばら',
        hangul: '아키하바라',
        jiantizi: '秋叶原',
      },
      melodyUrl: '//morgansleeper.github.io/Yamanotes/audio/ogawav1.mp3',
    },
    {
      numbering: 'JY04',
      name: {
        english: 'Okachimachi',
        kanji: '御徒町',
        hiragana: 'おかちまち',
        hangul: '오카치마치',
        jiantizi: '御徒町',
      },
      melodyUrl: '//morgansleeper.github.io/Yamanotes/audio/harutrem.mp3',
    },
    {
      code: 'UEN',
      numbering: 'JY05',
      name: {
        english: 'Ueno',
        kanji: '上野',
        hiragana: 'うえの',
        hangul: '우에노',
        jiantizi: '上野',
      },
      melodyUrl: '//morgansleeper.github.io/Yamanotes/audio/bellb.mp3',
    },
    {
      numbering: 'JY06',
      name: {
        english: 'Uguisudani',
        kanji: '鶯谷',
        hiragana: 'うぐいすだに',
        hangul: '우구이스다니',
        jiantizi: '鶯谷',
      },
      melodyUrl: '//morgansleeper.github.io/Yamanotes/audio/harutrem.mp3',
    },
    {
      code: 'NPR',
      numbering: 'JY07',
      name: {
        english: 'Nippori',
        kanji: '日暮里',
        hiragana: 'にっぽり',
        hangul: '닛포리',
        jiantizi: '日暮里',
      },
      melodyUrl: '//morgansleeper.github.io/Yamanotes/audio/harutrem.mp3',
    },
    {
      numbering: 'JY08',
      name: {
        english: 'Nishi-Nippori',
        kanji: '西日暮里',
        hiragana: 'にしにっぽり',
        hangul: '니시닛뽀리',
        jiantizi: '西日暮里',
      },
      melodyUrl: '//morgansleeper.github.io/Yamanotes/audio/harutrem.mp3',
    },
    {
      numbering: 'JY09',
      name: {
        english: 'Tabata',
        kanji: '田端',
        hiragana: 'たばた',
        hangul: '타바타',
        jiantizi: '田端',
      },
      melodyUrl: '//morgansleeper.github.io/Yamanotes/audio/harutrem.mp3',
    },
    {
      numbering: 'JY10',
      name: {
        english: 'Komagome',
        kanji: '駒込',
        hiragana: 'こまごめ',
        hangul: '고마고메',
        jiantizi: '驹込',
      },
      melodyUrl: '//morgansleeper.github.io/Yamanotes/audio/sakurab.mp3',
    },
    {
      numbering: 'JY11',
      name: {
        english: 'Sugamo',
        kanji: '巣鴨',
        hiragana: 'すがも',
        hangul: '스가모',
        jiantizi: '巢鸭',
      },
      melodyUrl: '//morgansleeper.github.io/Yamanotes/audio/haru.mp3',
    },
    {
      numbering: 'JY12',
      name: {
        english: 'Ōtsuka',
        kanji: '大塚',
        hiragana: 'おおつか',
        hangul: '오오츠카',
        jiantizi: '大塚',
      },
      melodyUrl: '//morgansleeper.github.io/Yamanotes/audio/haru.mp3',
    },
    {
      code: 'IKB',
      numbering: 'JY13',
      name: {
        english: 'Ikebukuro',
        kanji: '池袋',
        hiragana: 'いけぶくろ',
        hangul: '이케부쿠로',
        jiantizi: '池袋',
      },
      melodyUrl: '//morgansleeper.github.io/Yamanotes/audio/melody.mp3',
    },
    {
      numbering: 'JY14',
      name: {
        english: 'Mejiro',
        kanji: '目白',
        hiragana: 'めじろ',
        hangul: '메지로',
        jiantizi: '目白',
      },
      melodyUrl: '//morgansleeper.github.io/Yamanotes/audio/haru.mp3',
    },
    {
      numbering: 'JY15',
      name: {
        english: 'Takadanobaba',
        kanji: '高田馬場',
        hiragana: 'たかだのばば',
        hangul: '다카다노바바',
        jiantizi: '高田马场',
      },
      melodyUrl: '//morgansleeper.github.io/Yamanotes/audio/astrob.mp3',
    },
    {
      numbering: 'JY16',
      name: {
        english: 'Shin-Ōkubo',
        kanji: '新大久保',
        hiragana: 'しんおおくぼ',
        hangul: '신오쿠보',
        jiantizi: '新大久保',
      },
      melodyUrl: '//morgansleeper.github.io/Yamanotes/audio/bellb.mp3',
    },
    {
      code: 'SJK',
      numbering: 'JY17',
      name: {
        english: 'Shinjuku',
        kanji: '新宿',
        hiragana: 'しんじゅく',
        hangul: '신주쿠',
        jiantizi: '新宿',
      },
      melodyUrl: '//morgansleeper.github.io/Yamanotes/audio/aratana.mp3',
    },
    {
      numbering: 'JY18',
      name: {
        english: 'Yoyogi',
        kanji: '代々木',
        hiragana: 'よよぎ',
        hangul: '요요기',
        jiantizi: '代々木',
      },
      melodyUrl: '//morgansleeper.github.io/Yamanotes/audio/haru.mp3',
    },
    {
      numbering: 'JY19',
      name: {
        english: 'Harajuku',
        kanji: '原宿',
        hiragana: 'はらじゅく',
        hangul: '하라주쿠',
        jiantizi: '原宿',
      },
      melodyUrl: '//morgansleeper.github.io/Yamanotes/audio/harajukua.mp3',
    },
    {
      code: 'SBY',
      numbering: 'JY20',
      name: {
        english: 'Shibuya',
        kanji: '渋谷',
        hiragana: 'しぶや',
        hangul: '시부야',
        jiantizi: '涩谷',
      },
      melodyUrl: '//morgansleeper.github.io/Yamanotes/audio/hananohorokobi.mp3',
    },
    {
      code: 'EBS',
      numbering: 'JY21',
      name: {
        english: 'Ebisu',
        kanji: '恵比寿',
        hiragana: 'えびす',
        hangul: '에비스',
        jiantizi: '惠比寿',
      },
      melodyUrl: '//morgansleeper.github.io/Yamanotes/audio/thirdman.mp3',
    },
    {
      numbering: 'JY22',
      name: {
        english: 'Meguro',
        kanji: '目黒',
        hiragana: 'めぐろ',
        hangul: '메구로',
        jiantizi: '目黑',
      },
      melodyUrl: '//morgansleeper.github.io/Yamanotes/audio/watercrown.mp3',
    },
    {
      numbering: 'JY23',
      name: {
        english: 'Gotanda',
        kanji: '五反田',
        hiragana: 'ごたんだ',
        hangul: '고탄다',
        jiantizi: '五反田',
      },
      melodyUrl: '//morgansleeper.github.io/Yamanotes/audio/sh23.mp3',
    },
    {
      code: 'OSK',
      numbering: 'JY24',
      name: {
        english: 'Ōsaki',
        kanji: '大崎',
        hiragana: 'おおさき',
        hangul: '오사키',
        jiantizi: '大崎',
      },
      melodyUrl: '//morgansleeper.github.io/Yamanotes/audio/uminoeki.mp3',
    },
    {
      code: 'SGW',
      numbering: 'JY25',
      name: {
        english: 'Shinagawa',
        kanji: '品川',
        hiragana: 'しながわ',
        hangul: '시나가와',
        jiantizi: '品川',
      },
      melodyUrl: '//morgansleeper.github.io/Yamanotes/audio/seseragi.mp3',
    },
    {
      code: 'TGW',
      numbering: 'JY26',
      name: {
        english: 'Takanawa Gateway',
        kanji: '高輪ゲートウェイ',
        hiragana: 'たかなわげーとうぇい',
        hangul: '다카나와게이트웨이',
        jiantizi: '高轮Gateway',
      },
      melodyUrl: '//morgansleeper.github.io/Yamanotes/audio/sweetcall.mp3',
    },
    {
      numbering: 'JY27',
      name: {
        english: 'Tamachi',
        kanji: '田町',
        hiragana: 'たまち',
        hangul: '타마치',
        jiantizi: '田町',
      },
      melodyUrl: '//morgansleeper.github.io/Yamanotes/audio/seseragi.mp3',
    },
    {
      code: 'HMC',
      numbering: 'JY28',
      name: {
        english: 'Hamamatsuchō',
        kanji: '浜松町',
        hiragana: 'はままつちょう',
        hangul: '하마마츠쵸',
        jiantizi: '浜松町',
      },
      melodyUrl: '//morgansleeper.github.io/Yamanotes/audio/seseragi.mp3',
    },
    {
      code: 'SMB',
      numbering: 'JY29',
      name: {
        english: 'Shimbashi',
        kanji: '新橋',
        hiragana: 'しんばし',
        hangul: '신바시',
        jiantizi: '新桥',
      },
      melodyUrl: '//morgansleeper.github.io/Yamanotes/audio/gotadelvient.mp3',
    },
    {
      numbering: 'JY30',
      name: {
        english: 'Yūrakuchō',
        kanji: '有楽町',
        hiragana: 'ゆうらくちょう',
        hangul: '유라쿠쵸',
        jiantizi: '有乐町',
      },
      melodyUrl: '//morgansleeper.github.io/Yamanotes/audio/sh21.mp3',
    },
  ],
};
