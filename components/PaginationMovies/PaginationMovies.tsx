"use client";

import { Pagination } from "@mantine/core";
import styles from "./PaginationMovies.module.scss";
import { useState } from "react";

const PaginationMovies = (page: any) => {
	const [activePage, setPage] = useState(page);

	return (
		<div className={styles.paginationContainer}>
			<Pagination
				total={500}
				siblings={3}
				defaultValue={1}
				onChange={setPage}
				color='brown.4'
				className={styles.pagination}
			/>
		</div>
	);
};

export default PaginationMovies;
