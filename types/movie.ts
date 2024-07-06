import type { GenreT } from "./genre";

type ProductionCompanieT = {
	id: number;
	logo_path: string;
	name: string;
	origin_country: string;
};

type TrailerT = {
	type: string;
	official: boolean;
	id: string;
	key: string; // на youtube видео находится по key --> https://www.youtube.com/watch?v=qQlr9-rF32A
};

export type MovieT = {
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	video: boolean;
	videos: { results: TrailerT[] };
	vote_average: number;
	vote_count: number;
	production_companies: ProductionCompanieT[];
	genres: GenreT[];
	runtime: number;
	budget: number;
	revenue: number;
	homepage: string;
};
