import { displayTime } from './format';

describe('Format utils', () => {
  describe('displayTime', () => {
    it.each`
      timeSecs | display
      ${1000}  | ${'16:40'}
      ${400}   | ${'6:40'}
      ${250}   | ${'4:10'}
      ${50}    | ${'0:50'}
      ${0}     | ${'0:00'}
    `(
      'given $timeSecs it should return the correct display of $display',
      ({ timeSecs, display }) => {
        expect(displayTime(timeSecs)).toEqual(display);
      }
    );
  });
});
