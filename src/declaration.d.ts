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
  name: SimpleBilangualName;
  color?: string;
  heading?: boolean;
  trains?: Numbering[];
}

interface AreaNotation {
  letter: string;
  fill?: boolean;
}

interface SignData {
  name: QuadrilingualName;
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
  name: QuadrilingualName;
}
interface Line {
  name: BilangualName;
  stations: Station[];
  loop?: boolean;
  areaNotations?: AreaNotation[];
}
