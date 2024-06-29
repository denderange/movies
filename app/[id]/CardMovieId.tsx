import { Box, Group, Stack, Title, Text } from "@mantine/core";
import styles from "./MoviePage.module.scss";
import PopoverImage from "@/components/CardMovie/PopoverImage";
import Link from "next/link";
import { sliceText } from "@/utils/sliceText";
import { FaStar } from "react-icons/fa";
import ButtonUserRating from "@/components/ButtonUserRating/ButtonUserRating";

const CardMovieId = () => {
	const exampleTitle =
		"Movie Title Movie Titlewewe Moview2525235235rwrwr ryrryTitleMrtyrytovie Tiryrytrtyrtytle Movie Title Movie Title";

	return (
		<section className={styles.card}>
			<Box>
				<PopoverImage
					imgWidth={250}
					imgHeigth={352}
					imgSrc=''
					showPopower={false}
				/>
			</Box>
			<Stack className={styles.info}>
				<Box>
					{/* текст обрезается функцией sliceText и стилями .title в module.scss */}
					<Title
						order={5}
						mb={8}
						className={styles.title}>
						{exampleTitle}
					</Title>
					<Text mb={8}>
						<span>year</span>
					</Text>
					<Group
						mb={8}
						fw={700}
						fz={16}>
						<FaStar
							size={28}
							color='#fca13a'
						/>{" "}
						9.3 <span>(2.9M)</span>
					</Group>
				</Box>

				<div className={styles.movieDetails}>
					<span>Duration</span>
					<div>3h 40m</div>
					<span>Premiere</span>
					<div>December 4, 1993</div>
					<span>Budget</span>
					<div>$ 123.000.000</div>
					<span>Gross worldwide</span>
					<div>$355.000.000</div>
					<span>Genres</span>
					<div>Genre, genre, genre, genre, genre</div>
				</div>
			</Stack>

			<ButtonUserRating />
		</section>
	);
};

export default CardMovieId;
