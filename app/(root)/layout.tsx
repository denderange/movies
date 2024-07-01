import { Title } from "@mantine/core";
import Filters from "./_components/Filters/Filters";
import styles from "./page.module.scss";
import { getGenres } from "../../utils/fetchData";
import { GenreT } from "@/types/genre";
import Home from "./page";

export default async function RootLayout({}: // children,
{
	// children: React.ReactNode;
}) {
	const { genres } = await getGenres("en-Us");

	return (
		<main className={styles.wrapper}>
			<div className={styles.container}>
				<Title
					order={1}
					className={styles.pageTitle}>
					Movies
				</Title>
				<Filters genres={genres} />
				{/* {children} */}
				<Home genres={genres} />
			</div>
		</main>
	);
}
