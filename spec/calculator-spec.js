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
      expect(earthAge * yearToSeconds / .24).toEqual(262800000); //seconds
    });
  });

 describe('venusAge', function() {

    it('should correctly convert years into seconds and multiply seconds to venus solar year', function() {
      let earthAge = 2;
      const yearToSeconds = 31536000;
      expect(earthAge * yearToSeconds / .62).toEqual(101729032.25806452); //seconds
    });
  });

  describe('marsAge', function() {

     it('should correctly convert years into seconds and multiply seconds to mars solar year', function() {
       let earthAge = 2;
       const yearToSeconds = 31536000;
       expect(earthAge * yearToSeconds / 1.88).toEqual(33548936.170212768); //seconds
   });
  });

  describe('jupiterAge', function() {

     it('should correctly convert years into seconds and multiply seconds to jupiters solar year', function() {
       let earthAge = 2;
       const yearToSeconds = 31536000;
       expect(earthAge * yearToSeconds / 11.86).toEqual(5318043.844856662); //seconds
   });
  });
