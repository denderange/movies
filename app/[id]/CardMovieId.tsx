import { Box, Group, Stack, Title, Text } from "@mantine/core";
import styles from "./MoviePage.module.scss";
import PopoverImage from "@/components/CardMovie/PopoverImage";
import { FaStar } from "react-icons/fa";
import ButtonUserRating from "@/components/ButtonUserRating/ButtonUserRating";
import Link from "next/link";
import { MovieT } from "@/types/movie";
import { formatReleaseDate } from "@/utils/formatReleaseDate";
import { PiArrowFatLinesRightBold } from "react-icons/pi";

const CardMovieId = ({ movie }: { movie: MovieT }) => {
	const movieGenres = movie.genres
		.reduce(
			(acc: string[], genre: { name: string }) => [...acc, genre.name],
			[]
		)
		.join(", ");

	const getTimeFromMins = (mins: number) => {
		let hours = Math.trunc(mins / 60);
		let minutes = mins % 60;

		return hours >= 1 ? `${hours}h ${minutes}m` : `${minutes}m`;
	};

	function formatMoney(amount: number) {
		const numberFormatter = new Intl.NumberFormat("en-US");

		return numberFormatter.format(amount);
	}

	return (
		<section className={styles.cardContainer}>
			<div className={styles.card}>
				<Box>
					<PopoverImage
						imgWidth={250}
						imgHeigth={352}
						imgSrc={`${process.env.TMDB_POSTER_URL}/w300/${movie.poster_path}`}
						textTooltip=''
						href=''
						showPopower={false}
					/>
				</Box>
				<Stack className={styles.info}>
					<Box>
						<Title
							order={5}
							mb={8}
							className={styles.title}>
							{movie.title}
						</Title>
						<Text mb={8}>
							<span>{movie.release_date.slice(0, 4)}</span>
						</Text>
						<Group
							mb={8}
							fw={700}
							fz={16}>
							<FaStar
								size={28}
								color='#fca13a'
							/>{" "}
							{movie.vote_average.toFixed(1)} <span>({movie.vote_count})</span>
						</Group>
					</Box>

					<div className={styles.movieDetails}>
						<span>Duration</span>
						<div>{getTimeFromMins(movie.runtime)}</div>
						<span>Premiere</span>
						<div>{formatReleaseDate(movie.release_date)}</div>
						<span>Budget</span>
						<div>$ {formatMoney(movie.budget)}</div>
						<span>Gross worldwide</span>
						<div>
							{movie.revenue === 0 ? (
								<i className={styles.blankInfoData}>unknown</i>
							) : (
								`$ ${formatMoney(movie.revenue)}`
							)}
						</div>
						<span>Genres</span>
						<div>{movieGenres}</div>
					</div>
				</Stack>

				<ButtonUserRating />
			</div>

			{movie.homepage && (
				<div>
					Go to{" "}
					<Link
						href={movie.homepage}
						target='_blank'
						className={styles.linkMovieHomepage}
						title={movie.homepage}>
						movie homepage{" "}
						<PiArrowFatLinesRightBold
							style={{ position: "relative", top: "2px" }}
						/>
					</Link>
				</div>
			)}
		</section>
	);
};

export default CardMovieId;
