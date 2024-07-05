import { GenreT } from "@/types/genre";

export const handleGenresData = (
	allGenres: GenreT[],
	movieGenres: number[]
) => {
	const genresNames = [];

	if (allGenres) {
		for (let i of movieGenres) {
			const genre = allGenres.find((genre) => genre.id === i);

			if (genre) {
				genresNames.push(genre.name);
			}
		}
	}

	return genresNames;
};
