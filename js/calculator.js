export class Age {

  secondsInYear(earthAge) {
	   const yearToSeconds = 31536000;
	    let ageConvertedIntoSeconds = earthAge * yearToSeconds;
	     return ageConvertedIntoSeconds;
     }

  mercuryAge(earthAge){
      const yearToSeconds = 31536000;
      let ageConvertedIntoMercuryAge = earthAge * yearToSeconds / .24 / 60 / 60 / 24 / 365;
       return ageConvertedIntoMercuryAge;
     }
   venusAge(earthAge){
      const yearToSeconds = 31536000;
       let ageConvertedIntoVenusAge = earthAge * yearToSeconds / .62 / 60 / 60 / 24 / 365;
        return ageConvertedIntoVenusAge;
      }

  marsAge(earthAge){
     const yearToSeconds = 31536000;
      let ageConvertedIntoMarsAge = earthAge * yearToSeconds / 1.88 / 60 / 60 / 24 / 365;
       return ageConvertedIntoMarsAge;
     }

  jupiterAge(earthAge){
    const yearToSeconds = 31536000;
     let ageConvertedIntoJupiterAge = earthAge * yearToSeconds / 11.86 / 60 / 60 / 24 / 365;
      return ageConvertedIntoJupiterAge;
    }

}
