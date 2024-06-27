"use client";

import {
	Combobox,
	Fieldset,
	Group,
	Input,
	MultiSelect,
	Pill,
	PillsInput,
	Select,
	TextInput,
	useCombobox,
} from "@mantine/core";
import styles from "./Filters.module.scss";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { createReleaseYears } from "@/utils/createReleaseYears";

const genres = ["Apples", "Bananas", "Broccoli", "Carrots", "Chocolate"];

const Filters = () => {
	const [year, setYear] = useState<string | null>("");

	return (
		<form>
			<Group>
				<MultiSelect
					label='Genres'
					placeholder='Select genre'
					data={genres}
					w={280}
					comboboxProps={{
						transitionProps: { transition: "pop", duration: 200 },
						dropdownPadding: 0,
						shadow: "md",
					}}
					rightSectionPointerEvents='none'
					rightSection={<IoIosArrowDown />}
					hidePickedOptions
				/>

				<Select
					data={createReleaseYears()}
					value={year}
					onChange={setYear}
					comboboxProps={{
						transitionProps: { transition: "pop", duration: 200 },
						dropdownPadding: 0,
						shadow: "md",
					}}
					label='Release year'
					placeholder='Select release year'
					rightSectionPointerEvents='none'
					rightSection={<IoIosArrowDown />}
				/>
			</Group>
		</form>
	);
};

export default Filters;
