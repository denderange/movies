import { SimpleGrid, Stack } from "@mantine/core";
import styles from "./page.module.scss";
import CardMovie from "../../components/CardMovie/CardMovie";
import PaginationMovies from "@/components/PaginationMovies/PaginationMovies";

export default function Home() {
	return (
		<Stack className={styles.pageContent}>
			<SimpleGrid cols={{ base: 2, sm: 2, lg: 2 }}>
				{[...Array(3)].map((item, index) => (
					<CardMovie key={index} />
				))}
			</SimpleGrid>

			<PaginationMovies />
		</Stack>
	);
}
