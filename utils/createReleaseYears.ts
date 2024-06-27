export const createReleaseYears = () => {
	const yearNow = new Date().getFullYear();
	const theOldestFilmInTheHistory = 1888;

	const releaseYears = [];

	for (let i = theOldestFilmInTheHistory; i <= yearNow; i++) {
		releaseYears.push(i.toString());
	}

	return releaseYears.reverse();
};
