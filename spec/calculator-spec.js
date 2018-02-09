import { secondsInYear } from './../js/calculator.js';

describe('secondsInYear', function() {

  it('should correctly convert years into seconds', function() {
    let earthAge = 2;
    const yearToSeconds = 3153600;
    expect(earthAge * yearToSeconds).toEqual(6307200);
  });
});
