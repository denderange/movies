const TMDB_BASE_URL = process.env.TMDB_BASE_URL;
const TMDB_API_KEY = process.env.TMDB_API_KEY;
const TMDB_ACCESS_KEY = process.env.TMDB_ACCESS_KEY;
import { MovieT } from "@/types/movie";

const options = {
	method: "GET",
	headers: {
		accept: "application/json",
		Authorization: `Bearer ${TMDB_ACCESS_KEY}`,
	},
};

export const getGenres = async (lang: string) => {
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

export const getMovies = async (lang: string) => {
	try {
		const res = await fetch(
			`${TMDB_BASE_URL}/discover/movie?include_adult=false&include_video=false&language=${lang}&page=1&sort_by=popularity.desc`,
			options
		);
		const data = await res.json();

		return data;
	} catch (error) {
		throw new Error("Unable to get data.");
	}
};

export const getMovieById = async (
	id: string,
	lang: string
): Promise<MovieT> => {
	try {
		const res = await fetch(
			// `${TMDB_BASE_URL}/movie/${id}?language=${lang}`,
			`${TMDB_BASE_URL}/movie/${id}?api_key=${TMDB_API_KEY}&append_to_response=videos`,
			options
		);

		const data = await res.json();

		return data;
	} catch (error) {
		throw new Error("Unable to get data.");
	}
};
