import styles from "./MoviePage.module.scss";
import CardMovieId from "./CardMovieId";
import Image from "next/image";
import { getMovieById } from "@/utils/fetchData";
import { Metadata } from "next";
import Link from "next/link";
import { MovieT } from "@/types/movie";

export const generateMetadata = async ({
	params,
}: {
	params: { id: string };
}): Promise<Metadata> => {
	return {
		title: params.id,
	};
};

const MoviePage = async ({ params }: { params: { id: string } }) => {
	const movie = await getMovieById(params.id, "en-US");

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<CardMovieId movie={movie} />

				<section className={styles.trailer}>
					<div className={styles.video}>
						<h6>Trailer</h6>
						video
					</div>

					<div className={styles.description}>
						<h6>Description</h6>
						<p>{movie.overview}</p>
					</div>

					<div>
						<h6>Production</h6>
						{movie.production_companies.map((company: any) => (
							<div
								className={styles.productionDetails}
								key={company.id}>
								<div style={{ width: "70px" }}>
									<img
										src={`${process.env.TMDB_POSTER_URL}/w185/${company.logo_path}`}
										style={{ width: "70px" }}
										alt={company.name}
									/>
								</div>
								<p>
									{company.name}
									<span> ({company.origin_country})</span>
								</p>
							</div>
						))}
					</div>
				</section>
			</div>
		</div>
	);
};

export default MoviePage;
