const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

export const formatReleaseDate = (date: string) => {
	const releaseDate = new Date(date);
	const releaseMonth = months[releaseDate.getMonth() + 1];
	const releaseYear = releaseDate.getFullYear();

	return `${releaseMonth} ${releaseDate.getDate()}, ${releaseYear}`;
};
