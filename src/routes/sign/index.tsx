import {Fragment, FunctionalComponent, h} from 'preact';
import style from './style.css';

const SignStationLine: FunctionalComponent<{
  line: SignStation;
  align?: 'right';
}> = ({line, align}) => (
  <div class={style.stationLineContainer}>
    {line.heading && align !== 'right' ? (
      <div
        style={line.color ? `--color: ${line.color}` : ''}
        class={style.stationHeadingLeftTriangle}
      />
    ) : null}
    <div
      class={style.stationLineBar}
      style={{
        ...(line.color ? {'--color': line.color} : {}),
        textAlign: align,
      }}
    >
      <div class={style.stationLineBarTopName}>{line.name.kanji}</div>
      <div class={style.stationLineBarBottomNameContainer}>
        <div class={style.stationLineBarBottomName}>{line.name.english}</div>
      </div>
      <div
        class={
          align === 'right'
            ? style.stationLineBarNumberingRightContainer
            : style.stationLineBarNumberingLeftContainer
        }
      >
        {line.heading
          ? line.trains?.map(({prefix, suffix, color}) => (
              <div
                class={style.smallNumberingCodeContainer}
                style={color ? {'--color': color} : {}}
              >
                <div class={style.smallNumberingCode}>
                  <div>{prefix}</div>
                  <div class={style.smallNumberingSuffix}>{suffix}</div>
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
    {line.heading && align === 'right' ? (
      <div
        style={line.color ? {'--color': line.color} : {}}
        class={style.stationHeadingRightTriangle}
      />
    ) : null}
  </div>
);

export interface SignProperties {
  sign: SignData;
  scale?: number;
  boxShadow?: boolean;
}

const Sign: FunctionalComponent<SignProperties> = ({
  sign,
  scale = 1,
  boxShadow = false,
}) => (
  <div
    class={boxShadow ? style.signBoxShadow : style.sign}
    style={{transform: `scale(${scale})`}}
  >
    <div class={style.topContainer}>
      <div class={style.topNumberingContainer}>
        {sign.numbering ? (
          <div
            class={
              sign.code
                ? style.numberingContainerWithCode
                : style.numberingContainer
            }
          >
            <div class={style.numberingHeader}>{sign.code}</div>
            <div
              class={style.numberingCodeContainer}
              style={
                sign.numbering.color ? {'--color': sign.numbering.color} : {}
              }
            >
              <div class={style.numberingCode}>
                <div>{sign.numbering.prefix}</div>
                <div class={style.numberingSuffix}>{sign.numbering.suffix}</div>
              </div>
            </div>
          </div>
        ) : null}
      </div>

      <div class={style.topNameContainer}>
        <div class={style.topNameHuge}>
          {sign.name.kanji.split('').map((letter, index) => (
            <span class={style.topNameLetter} key={index}>
              {letter}
            </span>
          ))}
        </div>
        <div>{sign.name.hiragana}</div>
      </div>

      <div class={style.topOffsetNameContainer}>
        {sign.name.kanji.length < 7 ? (
          <Fragment>
            <div>{sign.name.jiantizi}</div>
            <div>{sign.name.hangul}</div>
          </Fragment>
        ) : null}
      </div>
    </div>

    <div class={style.areaNotationsContainer}>
      {sign.areaNotations?.map(({letter, fill}) => (
        <div class={fill ? style.areaNotationFilled : style.areaNotation}>
          {letter}
        </div>
      ))}
    </div>

    <div class={style.stationLinesContainer}>
      {sign.left ? (
        <SignStationLine line={sign.left} />
      ) : (
        <div class={style.stationLineBar} />
      )}
      <div
        class={style.currentStationLineBar}
        style={sign.color ? {'--color': sign.color} : {}}
      />
      {sign.right ? (
        <SignStationLine line={sign.right} align="right" />
      ) : (
        <div class={style.stationLineBar} />
      )}
    </div>
    <div class={style.bottomNameContainer}>
      <div>{sign.name.english}</div>
    </div>
  </div>
);

export default Sign;
