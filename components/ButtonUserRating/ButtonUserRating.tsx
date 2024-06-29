"use client";

import { FaStar } from "react-icons/fa";
import { useDisclosure } from "@mantine/hooks";
import {
	Box,
	Button,
	Modal,
	Rating,
	Stack,
	Title,
	Tooltip,
} from "@mantine/core";
import { useState } from "react";
import styles from "./ButtonUserRating.module.scss";

const ButtonUserRating = () => {
	const [opened, { open, close }] = useDisclosure(false);
	const [value, setValue] = useState(0);

	return (
		<>
			<Modal
				opened={opened}
				onClose={close}
				title='Your rating'
				transitionProps={{ transition: "skew-down" }}
				centered>
				<Stack className={styles.ratingModalContent}>
					<Title
						order={6}
						className={styles.titleMovie}>
						movie title
					</Title>
					<Rating
						fractions={1}
						defaultValue={0}
						color='red.5'
						size={28}
						count={10}
						value={value}
						onChange={setValue}
						className={styles.ratingStars}
					/>
					<Box>
						<Button
							color='orange'
							mr={20}
							radius={"md"}
							style={{ transition: "all 0.3s ease" }}>
							Save
						</Button>
						<Button
							variant='subtle'
							color='orange'
							radius={"md"}
							style={{ transition: "all 0.3s ease" }}>
							Remove rating
						</Button>
					</Box>
				</Stack>
			</Modal>

			<Tooltip
				label='Rate this movie'
				bg='yellow.0'
				bd={"1px solid yellow.6"}
				c='brown.8'>
				<button
					className={styles.buttonStarRate}
					onClick={open}>
					<FaStar
						size={28}
						color='#e9e1d9'
					/>
				</button>
			</Tooltip>
		</>
	);
};

export default ButtonUserRating;
