const displayTime = (timeSecs: number): string => {
  return `${_getMinutes(timeSecs)}:${_padZero(_getSeconds(timeSecs))}`;
};

const _getMinutes = (timeSecs: number): number => Math.trunc(timeSecs / 60);

const _getSeconds = (timeSecs: number): number => timeSecs % 60;

const _padZero = (timeSecs: number): string => {
  if (timeSecs < 10) {
    return `0${timeSecs}`;
  }

  return timeSecs.toString();
};

export { displayTime };
