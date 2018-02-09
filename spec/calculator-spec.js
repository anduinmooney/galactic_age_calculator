import { Age } from './../js/calculator.js';

  describe('secondsInYear', function() {

    it('should correctly convert years into seconds', function() {
      let earthAge = 2;
      const yearToSeconds = 3153600;
      expect(earthAge * yearToSeconds).toEqual(6307200); //seconds
    });
  });

  describe('mercuryAge', function() {

    it('should correctly convert years into seconds and multiply seconds to mercurys solar year', function() {
      let earthAge = 2;
      const yearToSeconds = 3153600;
      expect(earthAge * yearToSeconds * .24).toEqual(1513728); //seconds
    });
  });

 describe('venusAge', function() {

    it('should correctly convert years into seconds and multiply seconds to venus solar year', function() {
      let earthAge = 2;
      const yearToSeconds = 3153600;
      expect(earthAge * yearToSeconds * .62).toEqual(3910464); //seconds
    });
  });

  describe('marsAge', function() {

     it('should correctly convert years into seconds and multiply seconds to mars solar year', function() {
       let earthAge = 2;
       const yearToSeconds = 3153600;
       expect(earthAge * yearToSeconds * 1.88).toEqual(11857536); //seconds
   });
  });

  describe('jupiterAge', function() {

     it('should correctly convert years into seconds and multiply seconds to jupiters solar year', function() {
       let earthAge = 2;
       const yearToSeconds = 3153600;
       expect(earthAge * yearToSeconds * 11.86).toEqual(74803391); //seconds
   });
  });
