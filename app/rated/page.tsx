import {
	Button,
	Group,
	SimpleGrid,
	Stack,
	TextInput,
	Title,
} from "@mantine/core";
import styles from "./RatedMoviesPage.module.scss";
import CardMovie from "@/components/CardMovie/CardMovie";
import PaginationMovies from "@/components/PaginationMovies/PaginationMovies";
import { BiSearchAlt2 } from "react-icons/bi";

const RatedMoviesPage = () => {
	return (
		<div className={styles.wrapper}>
			<Stack className={styles.mainContainer}>
				<Group className={styles.ratedHeader}>
					<Title
						order={2}
						className={styles.pageTitle}>
						Rated movies
					</Title>

					<div className={styles.searchContainer}>
						<TextInput
							leftSectionPointerEvents='none'
							leftSection={<BiSearchAlt2 size={20} />}
							placeholder='Search movie title'
						/>
						<Button
							color='orange'
							radius={"md"}
							style={{ transition: "all 0.3s ease" }}>
							Search
						</Button>
					</div>
				</Group>

				<SimpleGrid cols={{ base: 2, sm: 2, lg: 2 }}>
					{[...Array(3)].map((item, index) => (
						<CardMovie key={index} />
					))}
				</SimpleGrid>
			</Stack>

			<PaginationMovies />
		</div>
	);
};

export default RatedMoviesPage;
