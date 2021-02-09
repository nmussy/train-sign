import useKey from '@rooks/use-key';
import {Howl} from 'howler';
import {FunctionalComponent, h} from 'preact';
import {useState} from 'preact/hooks';
import {useResizeDetector} from 'react-resize-detector';
import {SvgLoader, SvgProxy} from 'react-svgmt';
import {useWheel} from 'react-use-gesture';
import baseroute from '../../baseroute';
import Footer from '../../components/footer';
import {Lines} from '../../data/line';
import {copyUrlToClipboard} from '../../util/clipboard';
import {DIRECTION} from '../../util/enums';
import {
  serialize,
  deserialize,
  DEFAULT_SERIALIZED_STATE,
  DEFAULT_STATE,
} from '../../util/serialize';
import Sign from '../sign';
import style from './style.css';

const getNeighboringStations = (
  currentStation: Station,
  {stations, loop}: Line,
  direction: DIRECTION,
  disabledStationIndexes: number[] = [],
): [Station | undefined, Station | undefined] => {
  const currentStationIndex = stations.indexOf(currentStation);

  let previousStationIndex = currentStationIndex;
  do {
    --previousStationIndex;

    if (previousStationIndex < 0) {
      if (!loop) {
        previousStationIndex = -1;
        break;
      }
      previousStationIndex = stations.length - 1;
    }
  } while (
    disabledStationIndexes.includes(previousStationIndex) &&
    previousStationIndex !== currentStationIndex
  );

  let nextStationIndex = currentStationIndex;
  do {
    ++nextStationIndex;

    if (nextStationIndex === stations.length) {
      if (!loop) {
        nextStationIndex = -1;
        break;
      }
      nextStationIndex = 0;
    }
  } while (
    disabledStationIndexes.includes(nextStationIndex) &&
    nextStationIndex !== currentStationIndex
  );

  return direction === DIRECTION.LEFT_TO_RIGHT
    ? [stations[previousStationIndex], stations[nextStationIndex]]
    : [stations[nextStationIndex], stations[previousStationIndex]];
};

const getNumbering = (numbering: string, color?: string): Numbering => {
  const [prefix, suffix] = numbering.split(/(\d+)/);

  return {prefix, suffix, color};
};

const generateSign = (
  currentStation: Station,
  line: Line,
  direction: DIRECTION,
  disabledStationIndexes: number[] = [],
): SignData => {
  const [leftStation, rightStation] = getNeighboringStations(
    currentStation,
    line,
    direction,
    disabledStationIndexes,
  );

  const [left, right] = [leftStation, rightStation].map<
    SignStation | undefined
  >((station, index) =>
    station
      ? {
          ...station,
          numbering: getNumbering(station.numbering, line.color),
          trains: [getNumbering(station.numbering, line.color)],
          heading: index
            ? direction === DIRECTION.LEFT_TO_RIGHT
            : direction === DIRECTION.RIGHT_TO_LEFT,
        }
      : undefined,
  );

  return {
    ...currentStation,
    numbering: getNumbering(currentStation.numbering, line.color),
    left,
    right,
    areaNotations: currentStation.areaNotations ?? line.areaNotations,
    color: line.color,
  };
};

const SIGN_DIMENSION = {height: 490, width: 1830};

const Home: FunctionalComponent = () => {
  const params = new URLSearchParams(location.search.replace(/^\?/, ''));
  const [serializedState, displayMode] = [
    'serializedState',
    'displayMode',
  ].map((key) => params.get(key));

  const [firstLoad, setFirstLoad] = useState(true);

  let defaultState = DEFAULT_STATE;
  if (firstLoad) {
    setFirstLoad(false);
    if (serializedState && serializedState !== DEFAULT_SERIALIZED_STATE) {
      defaultState = deserialize(serializedState);
    }
  }

  const [currentLine, _setCurrentLine] = useState<Line>(
    Lines[defaultState.currentLineIndex],
  );
  const [currentStation, _setCurrentStation] = useState<Station>(
    currentLine.stations[defaultState.currentStationIndex],
  );
  const [disabledStationIndexes, setDisabledStationIndexes] = useState<
    number[]
  >(defaultState.disabledStationIndexes);
  const [autoplayMelodies, setAutoplayMelodies] = useState(
    defaultState.autoplayMelodies,
  );
  const [howl, setHowl] = useState<Howl | null>(null);

  const setStationHelper = (station: Station, preventHowl = false): void => {
    _setCurrentStation(station);
    howl?.stop();
    setHowl(
      autoplayMelodies && !preventHowl && station?.melodyUrl
        ? new Howl({
            src: station.melodyUrl,
            autoplay: true,
          })
        : null,
    );
  };
  const setLineHelper = (line: Line): void => {
    _setCurrentLine(line);
    setStationHelper(line.stations[0], true);
    setDisabledStationIndexes([]);
  };

  const [direction, _setDirection] = useState<DIRECTION>(
    defaultState.direction,
  );

  const setDirectionHelper = (direction: DIRECTION): void => {
    if (!currentLine.loop) {
      if (
        direction === DIRECTION.RIGHT_TO_LEFT &&
        currentStation === currentLine.stations[0]
      ) {
        setStationHelper(
          currentLine.stations[currentLine.stations.length - 1],
          true,
        );
      } else if (
        direction === DIRECTION.LEFT_TO_RIGHT &&
        currentStation === currentLine.stations[currentLine.stations.length - 1]
      ) {
        setStationHelper(currentLine.stations[0], true);
      }
    }
    _setDirection(direction);
  };

  const [leftStation, rightStation] = getNeighboringStations(
    currentStation,
    currentLine,
    direction,
    disabledStationIndexes,
  );

  const bindWheel = useWheel(
    ({event, delta: [, y]}) => {
      if (y < 0 && leftStation) {
        setStationHelper(leftStation);
      } else if (y > 0 && rightStation) {
        setStationHelper(rightStation);
      }
      event.preventDefault();
    },
    {axis: 'y'},
  );

  useKey(
    ['ArrowLeft', 'ArrowUp'],
    () => leftStation && setStationHelper(leftStation),
  );
  useKey(
    ['ArrowRight', 'ArrowDown'],
    () => rightStation && setStationHelper(rightStation),
  );

  const {width, ref: resizeRef} = useResizeDetector();
  const scaleRatio = Math.min(
    1,
    (width ?? SIGN_DIMENSION.width) / SIGN_DIMENSION.width,
  );
  const [signHeight, signWidth] = [
    SIGN_DIMENSION.height,
    SIGN_DIMENSION.width,
  ].map((dimension) => dimension * scaleRatio);

  const [boxShadow, setBoxShadow] = useState(defaultState.boxShadow);

  const currentSerializedState: SerializedState = {
    currentLineIndex: Lines.indexOf(currentLine),
    currentStationIndex: currentLine.stations.indexOf(currentStation),
    disabledStationIndexes,
    direction,
    autoplayMelodies,
    boxShadow,
  };

  if (displayMode === 'sign') {
    return (
      <div
        class={style.signContainer}
        style={{
          height: signHeight,
          width: signWidth,
        }}
        onClick={({offsetX}): void => {
          const station = offsetX > signHeight / 2 ? leftStation : leftStation;
          station && setStationHelper(station);
        }}
        {...bindWheel()}
      >
        <Sign
          sign={generateSign(
            currentStation,
            currentLine,
            direction,
            disabledStationIndexes,
          )}
          scale={scaleRatio}
          boxShadow={boxShadow}
        />
      </div>
    );
  } else if (displayMode === 'map') {
    return (
      <SvgLoader
        height="700"
        width="577"
        path={`${baseroute}/assets/line_maps/yamanote.svg`}
        {...bindWheel()}
      >
        <SvgProxy selector={'path[data-reset="black"]'} fill="black" />
        <SvgProxy selector={'path[data-reset="white"]'} fill="white" />
        <SvgProxy
          selector={'path[data-station="true"]'}
          onClick={({target}: {target: SVGPathElement}): void => {
            const targetNumbering = target.classList.toString();
            const station = currentLine.stations.find(
              ({numbering}) => numbering === targetNumbering,
            );
            if (station && station !== currentStation) {
              setStationHelper(station);
            }
          }}
        />
        {[`path.${currentStation.numbering}`].map((selector, ix) => (
          <SvgProxy key={ix} selector={selector} fill="#006400" />
        ))}
      </SvgLoader>
    );
  }

  return (
    <div class={style.homeContainer}>
      <div class={style.home} ref={resizeRef}>
        <h1>
          {currentLine.name.english} - {currentLine.name.kanji}
        </h1>
        <div
          class={style.signContainer}
          style={{
            height: signHeight,
            width: signWidth,
          }}
          onClick={({offsetX}): void => {
            const station =
              offsetX > signHeight / 2 ? leftStation : leftStation;
            station && setStationHelper(station);
          }}
          {...bindWheel()}
        >
          <Sign
            sign={generateSign(
              currentStation,
              currentLine,
              direction,
              disabledStationIndexes,
            )}
            scale={scaleRatio}
            boxShadow={boxShadow}
          />
        </div>
        <div class={style.optionContainer}>
          <div>
            <h2>Controls</h2>
            <form class={style.form} onSubmit={(e): void => e.preventDefault()}>
              <div>
                <label>Direction</label>
                <button
                  disabled={direction === DIRECTION.LEFT_TO_RIGHT}
                  onClick={(): void =>
                    setDirectionHelper(DIRECTION.LEFT_TO_RIGHT)
                  }
                >
                  {currentLine.stations[0].name.english} &rarr;{' '}
                  {
                    currentLine.stations[currentLine.stations.length - 1].name
                      .english
                  }
                </button>
                <button
                  disabled={direction === DIRECTION.RIGHT_TO_LEFT}
                  onClick={(): void =>
                    setDirectionHelper(DIRECTION.RIGHT_TO_LEFT)
                  }
                >
                  {
                    currentLine.stations[currentLine.stations.length - 1].name
                      .english
                  }{' '}
                  &rarr; {currentLine.stations[0].name.english}
                </button>
              </div>
              <div>
                <label>
                  Melodies
                  <button
                    onClick={(): void => {
                      autoplayMelodies && howl?.stop();
                      setAutoplayMelodies(!autoplayMelodies);
                    }}
                  >
                    {autoplayMelodies ? 'Disable' : 'Enable'}
                  </button>
                </label>
                <div>
                  <em>
                    You might need to click somewhere on the page before
                    melodies start playing
                  </em>
                </div>
              </div>
              <div>
                <label>
                  Backlit effect
                  <button
                    onClick={(): void => {
                      setBoxShadow(!boxShadow);
                    }}
                  >
                    {boxShadow ? 'Disable' : 'Enable'}
                  </button>
                </label>
              </div>
              <div>
                <button
                  disabled={!leftStation}
                  onClick={(): void =>
                    leftStation && setStationHelper(leftStation)
                  }
                >
                  Previous station
                </button>
                <button
                  disabled={!rightStation}
                  onClick={(): void =>
                    rightStation && setStationHelper(rightStation)
                  }
                >
                  Next station
                </button>
                <div>
                  <em>
                    To change stations, you can also:
                    <ul>
                      <li>Tap on the right or left side of the sign</li>
                      <li>Press an arrow key</li>
                      <li>Scroll on the sign or map</li>
                      <li>Tap a station node on the map (kind of finicky)</li>
                    </ul>
                  </em>
                </div>
              </div>
              <div>
                <button
                  onClick={(): void => {
                    copyUrlToClipboard(
                      `/?serializedState=${serialize(currentSerializedState)}`,
                    );
                  }}
                >
                  Copy parametrized URL
                </button>
                <br />
                <button
                  onClick={(): void => {
                    copyUrlToClipboard(
                      `/?displayMode=sign&serializedState=${serialize(
                        currentSerializedState,
                      )}`,
                    );
                  }}
                >
                  Copy parametrized sign URL
                </button>
                <br />
                {currentLine.map ? (
                  <button
                    onClick={(): void => {
                      copyUrlToClipboard(
                        `/?displayMode=map&serializedState=${serialize(
                          currentSerializedState,
                        )}`,
                      );
                    }}
                  >
                    Copy parametrized map URL
                  </button>
                ) : null}
              </div>
            </form>
            <h2>Options</h2>
            <form class={style.form} onSubmit={(e): void => e.preventDefault()}>
              <div>
                <label for="#line">Line</label>
                <select
                  disabled={Lines.length === 1}
                  id="line"
                  value={Lines.indexOf(currentLine)}
                  onChange={({target}): void => {
                    const line =
                      target &&
                      Lines[Number((target as HTMLSelectElement)?.value)];
                    line && setLineHelper(line);
                  }}
                >
                  {Lines.map((line, index) => (
                    <option value={index} key={index}>
                      {line.name.english}
                    </option>
                  ))}
                </select>
                <div>
                  {currentLine.stations.length} stations,{' '}
                  {disabledStationIndexes.length
                    ? `${
                        currentLine.stations.length -
                        disabledStationIndexes.length
                      } stops, `
                    : ''}
                  {currentLine.loop ? 'circle route' : 'non-looping route'}
                </div>
              </div>
              <div>
                <label>Stations</label>
                {(direction === DIRECTION.RIGHT_TO_LEFT
                  ? [...currentLine.stations].reverse()
                  : currentLine.stations
                ).map((station, index) => (
                  <div
                    key={index}
                    style={{
                      opacity: disabledStationIndexes.includes(index) ? 0.7 : 1,
                    }}
                  >
                    <button
                      disabled={station === currentStation}
                      title={`Jump to ${station.name.english} station`}
                      onClick={(): void => setStationHelper(station)}
                    >
                      &gt;
                    </button>
                    <input
                      type="checkbox"
                      title={
                        disabledStationIndexes.includes(index)
                          ? `Add ${station.name.english} station back to your route`
                          : `Remove ${station.name.english} station from your route`
                      }
                      checked={!disabledStationIndexes.includes(index)}
                      onChange={(): void => {
                        disabledStationIndexes.includes(index)
                          ? setDisabledStationIndexes(
                              disabledStationIndexes.filter(
                                (_index) => _index !== index,
                              ),
                            )
                          : setDisabledStationIndexes([
                              ...disabledStationIndexes,
                              index,
                            ]);
                      }}
                    />
                    <label
                      style={{
                        fontWeight: station === currentStation ? 'bold' : '',
                        color:
                          station === currentStation ? currentLine.color : '',
                      }}
                    >
                      {/* <input type="checkbox" checked={true} /> */}
                      {station.numbering} - {station.name.english}
                    </label>
                  </div>
                ))}
              </div>
            </form>
          </div>
          {currentLine.map ? (
            <div>
              <h2>Map</h2>
              <div class={style.mapContainer}>
                <SvgLoader
                  height="700"
                  width="577"
                  path={currentLine.map}
                  {...bindWheel()}
                >
                  <SvgProxy
                    selector={'path[data-reset="black"]'}
                    fill="black"
                  />
                  <SvgProxy
                    selector={'path[data-reset="white"]'}
                    fill="white"
                  />
                  <SvgProxy
                    selector={'path[data-station="true"]'}
                    onClick={({target}: {target: SVGPathElement}): void => {
                      const targetNumbering = target.classList.toString();
                      const station = currentLine.stations.find(
                        ({numbering}) => numbering === targetNumbering,
                      );
                      if (station && station !== currentStation) {
                        setStationHelper(station);
                      }
                    }}
                  />
                  {[`path.${currentStation.numbering}`].map((selector, ix) => (
                    <SvgProxy key={ix} selector={selector} fill="#006400" />
                  ))}
                </SvgLoader>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
