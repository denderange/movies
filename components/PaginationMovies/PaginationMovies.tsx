import { Pagination } from "@mantine/core";
import styles from "./PaginationMovies.module.scss";

const PaginationMovies = () => {
	return (
		<div className={styles.paginationContainer}>
			<Pagination
				total={500}
				siblings={3}
				defaultValue={10}
				color='brown.4'
				className={styles.pagination}
			/>
		</div>
	);
};

export default PaginationMovies;
