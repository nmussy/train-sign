declare module '*.css' {
  const mapping: Record<string, string>;
  export default mapping;
}

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    ref?: MutableRefObject;
  }
}

declare module 'react-svgmt';

interface SimpleBilangualName {
  kanji: string;
  english: string;
}

interface BilangualName extends SimpleBilangualName {
  hiragana: string;
}

interface QuadrilingualName extends BilangualName {
  jiantizi: string;
  hangul: string;
}

interface Numbering {
  prefix: string;
  suffix: string;
  color?: string;
}

interface SignStation {
  name: BilangualName;
  color?: string;
  heading?: boolean;
  trains?: Numbering[];
  melodyUrl?: string;
}

interface AreaNotation {
  letter: string;
  fill?: boolean;
}

interface SignData {
  company: COMPANY;
  name: BilangualName | QuadrilingualName;
  color?: string;
  code?: string;
  numbering?: Numbering;
  right?: SignStation;
  left?: SignStation;
  areaNotations?: AreaNotation[];
}

interface Station {
  code?: string;
  numbering: string;
  name: BilangualName | QuadrilingualName;
  melodyUrl?: string;
  areaNotations?: AreaNotation[];
}
interface Line {
  company: COMPANY;
  name: BilangualName;
  stations: Station[];
  color?: string;
  loop?: boolean;
  areaNotations?: AreaNotation[];
  map?: string;
}

interface SerializedState {
  currentLineIndex?: number;
  currentStationIndex?: number;
  disabledStationIndexes?: number[];
  direction?: DIRECTION;
  autoplayMelodies?: boolean;
  boxShadow?: boolean;
  darkMode?: boolean;
}
