import useKey from '@rooks/use-key';
import {FunctionalComponent, h} from 'preact';
import {useState} from 'preact/hooks';
import {useResizeDetector} from 'react-resize-detector';
import {SvgLoader, SvgProxy} from 'react-svgmt';
import {useWheel} from 'react-use-gesture';
import baseroute from '../../baseroute';
import {Lines} from '../../data/line';
import Sign from '../sign';
import style from './style.css';

enum DIRECTION {
  CLOCKWISE = 1,
  COUNTER_CLOCKWISE,
}

const getNeighboringStations = (
  currentStation: Station,
  {stations, loop}: Line,
  direction: DIRECTION,
): [Station | undefined, Station | undefined] => {
  const signStationIndex = stations.indexOf(currentStation);

  let previousStationIndex = signStationIndex - 1;
  let nextStationIndex = signStationIndex + 1;

  if (loop) {
    if (previousStationIndex < 0) {
      previousStationIndex = stations.length - 1;
    }
    if (nextStationIndex === stations.length) {
      nextStationIndex = 0;
    }
  }

  return direction === DIRECTION.CLOCKWISE
    ? [stations[previousStationIndex], stations[nextStationIndex]]
    : [stations[nextStationIndex], stations[previousStationIndex]];
};

const splitNubmering = (numbering: string): Numbering => {
  const [prefix, suffix] = numbering.split(/(\d+)/);

  return {prefix, suffix};
};

const generateSign = (
  currentStation: Station,
  line: Line,
  direction: DIRECTION,
): SignData => {
  const [leftStation, rightStation] = getNeighboringStations(
    currentStation,
    line,
    direction,
  );

  const [left, right] = [leftStation, rightStation].map<
    SignStation | undefined
  >((station, index) =>
    station
      ? {
          ...station,
          numbering: splitNubmering(station.numbering),
          trains: [splitNubmering(station.numbering)],
          heading: index
            ? direction === DIRECTION.CLOCKWISE
            : direction === DIRECTION.COUNTER_CLOCKWISE,
        }
      : undefined,
  );

  return {
    ...currentStation,
    numbering: splitNubmering(currentStation.numbering),
    left,
    right,
    areaNotations: line.areaNotations,
  };
};

const SIGN_DIMENSION = {height: 490, width: 1830};

const Home: FunctionalComponent = () => {
  const [currentLine, setCurrentLine] = useState<Line>(Lines[0]);
  const [currentStation, setCurrentStation] = useState<Station>(
    currentLine.stations[0],
  );
  const [direction, setDirection] = useState<DIRECTION>(DIRECTION.CLOCKWISE);
  const [leftStation, rightStation] = getNeighboringStations(
    currentStation,
    currentLine,
    direction,
  );

  const bindWheel = useWheel(
    ({event, delta: [, y]}) => {
      if (y < 0 && leftStation) {
        setCurrentStation(leftStation);
      } else if (y > 0 && rightStation) {
        setCurrentStation(rightStation);
      }
      event.preventDefault();
    },
    {axis: 'y'},
  );

  /* const bindDrag = useDrag(({swipe: [x, y]}) => {
      if ((x < 0 || y < 0) && leftStation) {
        setCurrentStation(leftStation);
      } else if ((x > 0 || y > 0) && rightStation) {
        setCurrentStation(rightStation);
      }
    }); */

  useKey(
    ['ArrowLeft', 'ArrowUp'],
    () => leftStation && setCurrentStation(leftStation),
  );
  useKey(
    ['ArrowRight', 'ArrowDown'],
    () => rightStation && setCurrentStation(rightStation),
  );

  const {width, ref} = useResizeDetector();
  const scaleRatio = Math.min(
    1,
    (width ?? SIGN_DIMENSION.width) / SIGN_DIMENSION.width,
  );
  const [signHeight, signWidth] = [
    SIGN_DIMENSION.height,
    SIGN_DIMENSION.width,
  ].map((dimension) => dimension * scaleRatio);

  return (
    <div class={style.home} ref={ref}>
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
          const station = offsetX > signHeight / 2 ? leftStation : leftStation;
          station && setCurrentStation(station);
        }}
        {...bindWheel()}
      >
        <Sign
          sign={generateSign(currentStation, currentLine, direction)}
          scale={scaleRatio}
        />
      </div>
      <div class={style.optionContainer}>
        <div>
          <h2>Controls</h2>
          <form class={style.form} onSubmit={(e): void => e.preventDefault()}>
            <div>
              <label>
                Direction
                <button
                  id="direction"
                  onClick={(): void =>
                    setDirection(
                      direction === DIRECTION.CLOCKWISE
                        ? DIRECTION.COUNTER_CLOCKWISE
                        : DIRECTION.CLOCKWISE,
                    )
                  }
                >
                  {direction === DIRECTION.CLOCKWISE
                    ? 'Counter-clockwise'
                    : 'Clockwise'}
                </button>
              </label>
            </div>
            <div>
              <button
                disabled={!leftStation}
                onClick={(): void =>
                  leftStation && setCurrentStation(leftStation)
                }
              >
                Previous station
              </button>
              <button
                disabled={!rightStation}
                onClick={(): void =>
                  rightStation && setCurrentStation(rightStation)
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
              <button disabled>
                Copy parametrized sign URL (coming soon&trade;)
              </button>
              <button disabled>
                Copy parametrized map URL (coming soon&trade;)
              </button>
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
                  if (!line) {
                    return;
                  }

                  setCurrentLine(line);
                  setCurrentStation(line.stations[0]);
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
                {currentLine.loop ? 'looping' : 'non-looping'}
              </div>
            </div>
            <div>
              <label>Stations</label>
              {(direction === DIRECTION.COUNTER_CLOCKWISE
                ? [...currentLine.stations].reverse()
                : currentLine.stations
              ).map((station, index) => (
                <div
                  key={index}
                  title={`Jump to ${station.name.english} station`}
                  onClick={(): void => setCurrentStation(station)}
                >
                  <button disabled={station === currentStation}>&gt;</button>
                  <label
                    style={{
                      fontWeight: station === currentStation ? 'bold' : '',
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
        <div>
          <h2>Map</h2>
          <div class={style.mapContainer}>
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
                    setCurrentStation(station);
                  }
                }}
              />
              {[`path.${currentStation.numbering}`].map((selector, ix) => (
                <SvgProxy key={ix} selector={selector} fill="#006400" />
              ))}
            </SvgLoader>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
