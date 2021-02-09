import {DIRECTION} from './enums';

const atob =
  (typeof window !== 'undefined' && window.atob) ||
  ((a: string): string => new Buffer(a, 'base64').toString());
const btoa =
  (typeof window !== 'undefined' && window.btoa) ||
  ((b: string): string => new Buffer(b).toString('base64'));

/*
 Only add properties **after** the last one.
 Changing the order of previous properties will break previous serializations
*/
export const DEFAULT_STATE: Required<SerializedState> = {
  currentLineIndex: 0,
  currentStationIndex: 0,
  disabledStationIndexes: [],
  direction: DIRECTION.LEFT_TO_RIGHT,
  autoplayMelodies: false,
  boxShadow: false,
};

const isDifferentFromDefaultValue = (
  key: keyof SerializedState,
  state: SerializedState,
): boolean => {
  const [value, defaultValue] = [state, DEFAULT_STATE].map(
    (_state) => _state[key],
  );

  return Array.isArray(value) && Array.isArray(defaultValue)
    ? [...(value || [])].sort().toString() !== defaultValue.toString()
    : value !== defaultValue;
};

const SERIALIZATION_SEPARATOR = '~';

export const serialize = (
  state: SerializedState,
  removeDefault = true,
): string => {
  const keys = Object.keys(DEFAULT_STATE) as (keyof SerializedState)[];

  const serializedArray = keys.map((key) =>
    !removeDefault || isDifferentFromDefaultValue(key, state)
      ? state[key]
      : null,
  );

  return btoa(serializedArray.join(SERIALIZATION_SEPARATOR))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');
};

export const deserialize = (
  serializedState: string,
): Required<SerializedState> => {
  const [
    currentLineIndex,
    currentStationIndex,
    disabledStationIndexes,
    direction,
    autoplayMelodies,
    boxShadow,
  ] = atob(serializedState.replace(/-/g, '+').replace(/_/g, '/')).split(
    SERIALIZATION_SEPARATOR,
  );

  console.log(
    disabledStationIndexes
      .split(',')
      .filter((index) => !!index)
      .map(Number),
  );

  return {
    currentLineIndex: Number(currentLineIndex),
    currentStationIndex: Number(currentStationIndex),
    disabledStationIndexes: disabledStationIndexes
      .split(',')
      .filter((index) => !!index)
      .map(Number),
    direction: direction ? Number(direction) : DEFAULT_STATE.direction,
    autoplayMelodies: autoplayMelodies === 'true',
    boxShadow: boxShadow === 'true',
  };
};

export const DEFAULT_SERIALIZED_STATE = serialize(DEFAULT_STATE, false);
