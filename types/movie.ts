import type { GenreT } from "./genre";

type ProductionCompanieT = {
	id: number;
	logo_path: string;
	name: string;
	origin_country: string;
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
	vote_average: number;
	vote_count: number;
	production_companies: ProductionCompanieT[];
	genres: GenreT[];
	runtime: number;
	budget: number;
	revenue: number;
	homepage: string;
};
