"use client";

import { Box, Stack } from "@mantine/core";
import styles from "./AsideMenu.module.scss";
import ToggleThemeButton from "../ToggleThemeButton/ToggleThemeButton";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
	{ name: "movies", href: "/" },
	{ name: "rated movies", href: "/rated" },
];

const AsideMenu = () => {
	const pathName = usePathname();

	return (
		<Stack className={styles.container}>
			<ToggleThemeButton />
			<Box className={styles.linksContainer}>
				{navItems.map((item) => (
					<Link
						href={item.href}
						key={item.name}
						className={`${pathName === item.href ? styles.linkActive : ""} ${
							styles.link
						}`}>
						{item.name}
					</Link>
				))}
			</Box>
		</Stack>
	);
};

export default AsideMenu;
