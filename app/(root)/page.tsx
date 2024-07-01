import { SimpleGrid, Stack } from "@mantine/core";
import styles from "./page.module.scss";
import CardMovie from "../../components/CardMovie/CardMovie";
import PaginationMovies from "@/components/PaginationMovies/PaginationMovies";
import { getMovies } from "@/utils/fetchData";
import { MovieT } from "@/types/movie";
import { GenreT } from "@/types/genre";

const Home = async ({ genres }: any) => {
	const moviesResponce = await getMovies("en-US");

	return (
		<Stack className={styles.pageContent}>
			<SimpleGrid cols={{ base: 2, sm: 2, lg: 2 }}>
				{moviesResponce.results.map((movie: any) => (
					<CardMovie
						key={movie.id}
						movie={movie}
						genres={genres}
					/>
				))}
			</SimpleGrid>

			<PaginationMovies page={moviesResponce.page} />
		</Stack>
	);
};

export default Home;
