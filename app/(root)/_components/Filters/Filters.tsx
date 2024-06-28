"use client";

import {
	Box,
	Button,
	Combobox,
	Fieldset,
	Group,
	Input,
	MultiSelect,
	Pill,
	PillsInput,
	Select,
	Text,
	TextInput,
	useCombobox,
} from "@mantine/core";
import styles from "./Filters.module.scss";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { BiExpandVertical } from "react-icons/bi";
import { createReleaseYears } from "@/utils/createReleaseYears";

const genres = ["Apples", "Bananas", "Broccoli", "Carrots", "Chocolate"];
const ratingNumbers = [...Array(11)].map((_, i) => i.toString()).slice(1, 11);
const ratingNumbersDesc = [...Array(11)]
	.reverse()
	.map((_, i) => i.toString())
	.slice(1, 11);
const sortByOptions = ["Most popular", "Rating", "Genre", "Year"];

const Filters = () => {
	const [year, setYear] = useState<string | null>("");
	const [sortBy, setSortBy] = useState<string | null>("Most popular");

	return (
		<form>
			<Group
				style={{ justifyContent: "space-between" }}
				mt={"lg"}
				mb={"xl"}>
				<Box>
					<Text
						mb={"sm"}
						c={"red.7"}>
						Genres
					</Text>
					<MultiSelect
						placeholder='Select genre'
						data={genres}
						w={280}
						rightSectionPointerEvents='none'
						rightSection={<IoIosArrowDown />}
						hidePickedOptions
						comboboxProps={{
							transitionProps: { transition: "pop", duration: 200 },
							dropdownPadding: 0,
							shadow: "md",
						}}
					/>
				</Box>

				<Box>
					<Text
						mb={"sm"}
						c={"red.7"}>
						Release year
					</Text>
					<Select
						data={createReleaseYears()}
						value={year}
						onChange={setYear}
						w={200}
						placeholder='Select release year'
						rightSectionPointerEvents='none'
						rightSection={<IoIosArrowDown />}
						comboboxProps={{
							transitionProps: { transition: "pop", duration: 200 },
							dropdownPadding: 0,
							shadow: "md",
						}}
					/>
				</Box>

				<Box>
					<Text
						mb={"sm"}
						c={"red.7"}>
						Ratings
					</Text>
					<Group>
						<Select
							data={ratingNumbers}
							value={year}
							onChange={setYear}
							w={130}
							placeholder='From'
							rightSectionPointerEvents='none'
							rightSection={<BiExpandVertical />}
							comboboxProps={{
								transitionProps: { transition: "pop", duration: 200 },
								dropdownPadding: 0,
								shadow: "md",
							}}
						/>

						<Select
							data={ratingNumbersDesc}
							value={year}
							onChange={setYear}
							w={130}
							placeholder='To'
							rightSectionPointerEvents='none'
							rightSection={<BiExpandVertical />}
							comboboxProps={{
								transitionProps: { transition: "pop", duration: 200 },
								dropdownPadding: 0,
								shadow: "md",
							}}
						/>
					</Group>
				</Box>

				<Button
					variant='subtle'
					color='orange'
					style={{ alignSelf: "flex-end" }}>
					Reset filters
				</Button>

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
						onChange={setSortBy}
						w={200}
						defaultValue={sortBy}
						rightSectionPointerEvents='none'
						rightSection={<IoIosArrowDown />}
						comboboxProps={{
							transitionProps: { transition: "pop", duration: 200 },
							dropdownPadding: 0,
							shadow: "md",
						}}
					/>
				</Box>
			</Group>
		</form>
	);
};

export default Filters;
