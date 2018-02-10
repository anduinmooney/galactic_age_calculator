import { Age } from './../js/calculator.js';

  describe('secondsInYear', function() {

    it('should correctly convert years into seconds', function() {
      let earthAge = 2;
      const yearToSeconds = 31536000;
      expect(earthAge * yearToSeconds).toEqual(63072000); //seconds
    });
  });

  describe('mercuryAge', function() {

    it('should correctly convert years into seconds and multiply seconds to mercurys solar year', function() {
      let earthAge = 2;
      const yearToSeconds = 31536000;
      expect(earthAge * yearToSeconds * .24).toEqual(15137280); //seconds
    });
  });

 describe('venusAge', function() {

    it('should correctly convert years into seconds and multiply seconds to venus solar year', function() {
      let earthAge = 2;
      const yearToSeconds = 31536000;
      expect(earthAge * yearToSeconds * .62).toEqual(39104640); //seconds
    });
  });

  describe('marsAge', function() {

     it('should correctly convert years into seconds and multiply seconds to mars solar year', function() {
       let earthAge = 2;
       const yearToSeconds = 31536000;
       expect(earthAge * yearToSeconds * 1.88).toEqual(118575360); //seconds
   });
  });

  describe('jupiterAge', function() {

     it('should correctly convert years into seconds and multiply seconds to jupiters solar year', function() {
       let earthAge = 2;
       const yearToSeconds = 31536000;
       expect(earthAge * yearToSeconds * 11.86).toEqual(748033920); //seconds
   });
  });
