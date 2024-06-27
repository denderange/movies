import { Box, Group, Stack, Text, Title } from "@mantine/core";
import styles from "./CardMovie.module.scss";
import { FaStar } from "react-icons/fa";
import { sliceText } from "@/utils/sliceText";
import Link from "next/link";
import PopoverImage from "./PopoverImage";
import ButtonUserRating from "@/components/ButtonUserRating/ButtonUserRating";

const CardMovie = () => {
	const exampleTitle =
		"Movie Title Movie Titlewewe Moview2525235235rwrwr ryrryTitleMrtyrytovie Tiryrytrtyrtytle Movie Title Movie Title";

	return (
		<Group className={styles.card}>
			<Box>
				<PopoverImage />
			</Box>
			<Stack className={styles.info}>
				<Box>
					{/* текст обрезается функцией sliceText и стилями .title в module.scss */}
					<Title
						order={5}
						mb={8}
						className={styles.title}>
						<Link
							href={"#"}
							className={styles.linkToMovie}>
							{sliceText(exampleTitle)}
						</Link>
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
				<Text truncate='end'>
					<span>Genres:</span>genre, genre, genre, genre, genre, genre, genre,
					genre, genre, genre,
				</Text>
			</Stack>

			<ButtonUserRating />
		</Group>
	);
};

export default CardMovie;
