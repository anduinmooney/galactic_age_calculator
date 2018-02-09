export class Age {

  secondsInYear(earthAge) {
	   const yearToSeconds = 31536000;
	    let ageConvertedIntoSeconds = earthAge * yearToSeconds;
	     return ageConvertedIntoSeconds;
     }

  mercuryAge(earthAge){
      const yearToSeconds = 31536000;
      let ageConvertedIntoMercuryAge = earthAge * yearToSeconds * .24;
       return ageConvertedIntoMercuryAge;
     }
   venusAge(earthAge){
      const yearToSeconds = 31536000;
       let ageConvertedIntoVenusAge = earthAge * yearToSeconds * .62;
        return ageConvertedIntoVenusAge;
      }

  marsAge(earthAge){
     const yearToSeconds = 31536000;
      let ageConvertedIntoVenusAge = earthAge * yearToSeconds * 1.88;
       return ageConvertedIntoVenusAge;
     }

}
