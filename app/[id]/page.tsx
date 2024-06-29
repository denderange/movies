import { Stack } from "@mantine/core";
import styles from "./MoviePage.module.scss";
import CardMovieId from "./CardMovieId";
import Image from "next/image";

const MoviePage = ({ params }: { params: { id: string } }) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<CardMovieId />
				<section className={styles.trailer}>
					<div className={styles.video}>
						<h6>Trailer</h6>
						video
					</div>

					<div className={styles.description}>
						<h6>Description</h6>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
						nam maxime natus. Minima doloribus quidem temporibus fugit. Neque,
						vero eius, ducimus consectetur magnam quod fugiat ipsum dolorem quam
						nemo accusantium!
					</div>

					<div>
						<h6>Production</h6>
						<div className={styles.productionDetails}>
							<div>
								<Image
									src={""}
									width={40}
									height={40}
									alt=''
								/>
							</div>
							<p>Studio</p>

							<div>
								<Image
									src={""}
									width={40}
									height={40}
									alt=''
								/>
							</div>
							<p>Studio</p>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default MoviePage;
