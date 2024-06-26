"use client";

import {
	ActionIcon,
	useMantineColorScheme,
	useComputedColorScheme,
} from "@mantine/core";
import cx from "clsx";
import { FaLightbulb, FaRegLightbulb } from "react-icons/fa";
import classes from "./Demo.module.css";

const ToggleThemeButton = () => {
	const { setColorScheme } = useMantineColorScheme();
	const computedColorScheme = useComputedColorScheme("light", {
		getInitialValueInEffect: true,
	});

	return (
		<ActionIcon
			onClick={() =>
				setColorScheme(computedColorScheme === "light" ? "dark" : "light")
			}
			variant='default'
			size='xl'
			aria-label='Toggle color scheme'>
			<FaRegLightbulb className={cx(classes.icon, classes.light)} />
			<FaLightbulb className={cx(classes.icon, classes.dark)} />
		</ActionIcon>
	);
};

export default ToggleThemeButton;
