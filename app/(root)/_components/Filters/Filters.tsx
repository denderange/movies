"use client";

import { Box, Button, Group, MultiSelect, Select, Text } from "@mantine/core";
import styles from "./Filters.module.scss";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { BiExpandVertical } from "react-icons/bi";
import { createReleaseYears } from "@/utils/createReleaseYears";
import type { GenresT } from "@/types/genres";

// const genresSSS = ["Apples", "Bananas", "Broccoli", "Carrots", "Chocolate"];
// const ratingNumbers = [...Array(11)].map((_, i) => i.toString()).slice(1, 11);

const sortByOptions = [
	"Popularity",
	"Title",
	"Release date",
	"Revenue",
	"Vote",
];

type FiltersProps = {
	genres: GenresT[];
};

type SelectedRatingT = {
	from: string;
	to: string;
};

const Filters = ({ genres }: FiltersProps) => {
	const [chosenGenres, setChosenGenres] = useState<string[]>();
	const [chosenRating, setChosenRating] = useState<SelectedRatingT>();
	const [year, setYear] = useState<string | null>("");
	const [sortBy, setSortBy] = useState<string | null>("Popularity");

	const genresNames = genres.reduce(
		(acc: string[], item) => [...acc, item.name],
		[]
	);

	// reverse() не срабатывает при вызове в компонентe Select :(
	const ratingValuesFrom = Array(10)
		.fill(0)
		.map((item, index) => (index + 1).toString());

	const ratingValuesTo = Array(10)
		.fill(0)
		.map((item, index) => (index + 1).toString())
		.reverse();

	const handleResetFilters = () => {
		setChosenGenres(() => []);
	};

	return (
		<form className={styles.filtersForm}>
			<p>chosen genres: {chosenGenres}</p>
			<Group
				style={{ justifyContent: "space-between" }}
				mt={"lg"}
				mb={"xl"}>
				<Box style={{ alignSelf: "flex-start" }}>
					<Text
						mb={"sm"}
						c={"red.7"}>
						Genres
					</Text>
					<MultiSelect
						placeholder='Select genre'
						data={genresNames}
						onChange={(value: string[]) => setChosenGenres(value)}
						maxDropdownHeight={"max-content"}
						w={280}
						size='md'
						rightSectionPointerEvents='none'
						rightSection={<IoIosArrowDown />}
						hidePickedOptions
						comboboxProps={{
							transitionProps: { transition: "pop", duration: 200 },
							dropdownPadding: 10,
							shadow: "md",
						}}
					/>
				</Box>

				<Box style={{ alignSelf: "flex-start" }}>
					<Text
						mb={"sm"}
						c={"red.7"}>
						Release year
					</Text>
					<Select
						data={createReleaseYears()}
						value={year}
						onChange={setYear}
						size='md'
						w={200}
						placeholder='Select release year'
						rightSectionPointerEvents='none'
						rightSection={<IoIosArrowDown />}
						comboboxProps={{
							transitionProps: { transition: "pop", duration: 200 },
							dropdownPadding: 10,
							shadow: "md",
						}}
					/>
				</Box>

				<Box style={{ alignSelf: "flex-start" }}>
					<Text
						mb={"sm"}
						c={"red.7"}>
						Ratings
					</Text>
					<Group>
						<Select
							data={ratingValuesFrom}
							value={chosenRating?.from}
							onChange={setYear}
							maxDropdownHeight={"max-content"}
							withCheckIcon={false}
							w={130}
							size='md'
							placeholder='From'
							rightSectionPointerEvents='none'
							rightSection={<BiExpandVertical />}
							comboboxProps={{
								transitionProps: { transition: "pop", duration: 200 },
								dropdownPadding: 10,
								shadow: "md",
							}}
						/>

						<Select
							data={ratingValuesTo}
							value={chosenRating?.to}
							onChange={setYear}
							maxDropdownHeight={"max-content"}
							withCheckIcon={false}
							w={130}
							size='md'
							placeholder='To'
							rightSectionPointerEvents='none'
							rightSection={<BiExpandVertical />}
							comboboxProps={{
								transitionProps: { transition: "pop", duration: 200 },
								dropdownPadding: 10,
								shadow: "md",
							}}
						/>
					</Group>
				</Box>

				<Box
					style={{
						display: "flex",
						flexDirection: "column",
						alignSelf: "center",
					}}>
					<Button
						variant='subtle'
						color='orange'
						onClick={handleResetFilters}
						className={styles.btnResetFilters}>
						Reset filters
					</Button>
				</Box>

				<Box
					style={{
						marginLeft: "auto",
					}}>
					<Text
						mb={"sm"}
						c={"red.7"}>
						Sort by
					</Text>
					<Select
						data={sortByOptions}
						value={sortBy}
						defaultValue={sortBy}
						onChange={setSortBy}
						w={200}
						size='md'
						rightSectionPointerEvents='none'
						rightSection={<IoIosArrowDown />}
						comboboxProps={{
							transitionProps: { transition: "pop", duration: 200 },
							dropdownPadding: 10,
							shadow: "md",
						}}
					/>
				</Box>
			</Group>
		</form>
	);
};

export default Filters;
