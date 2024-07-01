import type { Metadata } from "next";
import { Geologica } from "next/font/google";
import "@mantine/core/styles.css";
import { Box, ColorSchemeScript, MantineProvider, Stack } from "@mantine/core";
import { theme } from "@/theme";
import "./global.styles.scss";
import ToggleThemeButton from "@/components/ToggleThemeButton/ToggleThemeButton";
import AsideMenu from "@/components/AsideMenu/AsideMenu";

const inter = Geologica({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Movies",
	description: "Movie search and review",
	category: "entertainment",
	keywords: ["Next.js", "React", "TypeScript"],
	creator: "Dennis Polukaroff",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<head>
				<ColorSchemeScript defaultColorScheme='light' />
			</head>
			<body className={inter.className}>
				<MantineProvider theme={theme}>
					{/* <ToggleThemeButton /> */}
					<Stack className='pageWrapper'>
						<Box className='pageContainer'>
							<AsideMenu />
							{children}
						</Box>
					</Stack>
				</MantineProvider>
			</body>
		</html>
	);
}
