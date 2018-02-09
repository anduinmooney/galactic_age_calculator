export function secondsInYear(earthAge) {
	const yearToSeconds = 31536000;
	let ageConvertedIntoSeconds = earthAge * yearToSeconds;
	return ageConvertedIntoSeconds;
}
