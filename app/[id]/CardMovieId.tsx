import { Box, Group, Stack, Title, Text } from "@mantine/core";
import styles from "./MoviePage.module.scss";
import PopoverImage from "@/components/CardMovie/PopoverImage";
import { FaStar } from "react-icons/fa";
import ButtonUserRating from "@/components/ButtonUserRating/ButtonUserRating";
import Link from "next/link";

const CardMovieId = ({ movie }: any) => {
	const movieGenres = movie.genres
		.reduce(
			(acc: string[], genre: { name: string }) => [...acc, genre.name],
			[]
		)
		.join(", ");

	return (
		<section className={styles.cardContainer}>
			<div className={styles.card}>
				<Box>
					<PopoverImage
						imgWidth={250}
						imgHeigth={352}
						imgSrc={`${process.env.TMDB_POSTER_URL}/w300/${movie.poster_path}`}
						textTooltip=''
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
							<span>{movie.release_date}</span>
						</Text>
						<Group
							mb={8}
							fw={700}
							fz={16}>
							<FaStar
								size={28}
								color='#fca13a'
							/>{" "}
							{movie.vote_average} <span>({movie.vote_count})</span>
						</Group>
					</Box>

					<div className={styles.movieDetails}>
						<span>Duration</span>
						<div>{movie.runtime}</div>
						<span>Premiere</span>
						<div>{movie.release_date}</div>
						<span>Budget</span>
						<div>$ {movie.budget}</div>
						<span>Gross worldwide</span>
						<div>$ {movie.revenue}</div>
						<span>Genres</span>
						<div>{movieGenres}</div>
					</div>
				</Stack>

				<ButtonUserRating />
			</div>

			<div>
				Go to{" "}
				<Link
					href={movie.homepage}
					target='_blank'
					className={styles.linkMovieHomepage}>
					movie homepage
				</Link>
			</div>
		</section>
	);
};

export default CardMovieId;
