const TMDB_BASE_URL = process.env.TMDB_BASE_URL;
const TMDB_API_KEY = process.env.TMDB_API_KEY;
const TMDB_ACCESS_KEY = process.env.TMDB_ACCESS_KEY;

export const getGenres = async (lang: string) => {
	const options = {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization: `Bearer ${TMDB_ACCESS_KEY}`,
		},
	};

	try {
		const res = await fetch(
			`${TMDB_BASE_URL}/genre/movie/list?language=${lang}`,
			options
		);
		const data = await res.json();

		return data;
	} catch (error) {
		throw new Error("Unable to get data.");
	}
};
