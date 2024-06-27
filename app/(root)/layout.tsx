import { Title } from "@mantine/core";
import Filters from "./_components/Filters/Filters";
import styles from "./page.module.scss";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main className={styles.mainContainer}>
			<Title
				order={1}
				className={styles.pageTitle}>
				Movies
			</Title>
			<Filters />
			{children}
		</main>
	);
}
