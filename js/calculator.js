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
}
