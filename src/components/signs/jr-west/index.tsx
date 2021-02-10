import {FunctionalComponent, h} from 'preact';
import {SignProperties} from '..';
import baseroute from '../../../baseroute';
import style from './style.css';

const SignStationLine: FunctionalComponent<{
  line: SignStation;
  align?: 'right';
}> = ({line, align}) => (
  <div
    class={
      align === 'right'
        ? style.stationLineContainerRight
        : style.stationLineContainer
    }
  >
    {line.heading && align !== 'right' ? (
      <div class={style.directionArrow}>&larr;</div>
    ) : null}
    <div class={style.stationLineName}>
      <div class={style.stationLineBarTopName}>{line.name.hiragana}</div>
      <div class={style.stationLineBarBottomNameContainer}>
        <div class={style.stationLineBarBottomName}>{line.name.english}</div>
      </div>
    </div>
    {line.heading && align === 'right' ? (
      <div class={style.directionArrow}>&rarr;</div>
    ) : null}
  </div>
);

export const JRWestSign: FunctionalComponent<SignProperties> = ({sign, darkMode}) => (
  <div class={darkMode ? style.signDark : style.sign}>
    <div class={style.topContainer}>
      <div class={style.logoContainer}>
        <img src={`${baseroute}/assets/logos/jr_west.svg`} />
      </div>
      <div class={style.topNameContainer}>
        <div class={style.topNameHuge}>
          {sign.name.kanji.split('').map((letter, index) => (
            <span class={style.topNameLetter} key={index}>
              {letter}
            </span>
          ))}
        </div>
        <div class={style.topName}>
          <div>{sign.name.hiragana}</div>
          <div>{sign.name.english}</div>
        </div>
      </div>
      <div />
    </div>

    <div class={style.areaNotationsContainer}>
      {sign.areaNotations?.map(({letter, fill}) => (
        <div class={fill ? style.areaNotationFilled : style.areaNotation}>
          {letter}
        </div>
      ))}
    </div>

    <div
      class={style.stationLinesContainer}
      style={sign.color ? {'--color': sign.color} : {}}
    >
      {sign.left ? (
        <SignStationLine line={sign.left} />
      ) : (
        <div class={style.stationLineBar} />
      )}
      {sign.right ? (
        <SignStationLine line={sign.right} align="right" />
      ) : (
        <div class={style.stationLineBar} />
      )}
    </div>
  </div>
);
