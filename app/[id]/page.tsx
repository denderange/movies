import styles from "./MoviePage.module.scss";
import CardMovieId from "./CardMovieId";
import { getMovieById } from "@/utils/fetchData";
import { Metadata } from "next";

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
	const blankCompanyLogo = "/images/no-image-available.jpg";

	const trailerVideoKey =
		movie.videos.results.find((item) => item.type === "Trailer")?.key ||
		movie.videos.results[0].key;

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<CardMovieId movie={movie} />

				{/* Trailer */}
				<section className={styles.trailer}>
					<div className={styles.video}>
						<h6>Trailer</h6>
						<div className={styles.videoContainer}>
							<iframe
								id='ytplayer'
								width='480'
								height='270'
								src={`https://www.youtube.com/embed/${trailerVideoKey}`}
								frameBorder='0'
								allowFullScreen></iframe>
						</div>
					</div>

					{/* Description */}
					<div className={styles.description}>
						<h6>Description</h6>
						<p>{movie.overview}</p>
					</div>

					{/* Production */}
					<div>
						<h6>Production</h6>
						{movie.production_companies.map((company: any) => (
							<div
								className={styles.productionDetails}
								key={company.id}>
								<div style={{ width: "70px" }}>
									<img
										src={
											company.logo_path === null
												? blankCompanyLogo
												: `${process.env.TMDB_POSTER_URL}/w185/${company.logo_path}`
										}
										style={{ width: "70px" }}
										alt=''
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
