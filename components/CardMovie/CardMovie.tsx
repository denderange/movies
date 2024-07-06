import { Box, Group, Stack, Text, Title } from "@mantine/core";
import styles from "./CardMovie.module.scss";
import { FaStar } from "react-icons/fa";
import { sliceText } from "@/utils/sliceText";
import Link from "next/link";
import PopoverImage from "./PopoverImage";
import ButtonUserRating from "@/components/ButtonUserRating/ButtonUserRating";
import type { MovieT } from "@/types/movie";
import { handleGenresData } from "@/utils/handleGenresData";
import { formatReleaseDate } from "@/utils/formatReleaseDate";

const CardMovie = ({ movie, genres }: { movie: MovieT; genres: any }) => {
	const genresNames = handleGenresData(genres, movie.genre_ids);

	return (
		<Group className={styles.card}>
			<Box>
				<PopoverImage
					imgWidth={119}
					imgHeigth={170}
					textTooltip={movie.overview}
					imgSrc={`${process.env.TMDB_POSTER_URL}/w185/${movie.poster_path}`}
					showPopower={true}
					href={`/${movie.id}`}
				/>
			</Box>
			<Stack className={styles.info}>
				<Box>
					<Title
						order={5}
						mb={8}
						className={styles.title}>
						<Link
							href={`/${movie.id}`}
							className={styles.linkToMovie}
							title={`go to movie details page`}>
							{sliceText(movie.title, 38)}
						</Link>
					</Title>
					<Text mb={8}>
						<span>{formatReleaseDate(movie.release_date)}</span>
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
				<Text truncate='end'>
					<span>Genres:</span>
					{genresNames.join(", ")}
				</Text>
			</Stack>

			<ButtonUserRating />
		</Group>
	);
};

export default CardMovie;
