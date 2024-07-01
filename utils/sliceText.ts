export const sliceText = (text: string, maxLetters: number) => {
	if (text.length > maxLetters) {
		return text.slice(0, maxLetters).concat("...");
	} else if (text.length <= maxLetters) {
		return text;
	}
};
