"use client";

import { Popover, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import Image from "next/image";
import styles from "./CardMovie.module.scss";

type PopoverImageProps = {
	imgWidth: number;
	imgHeigth: number;
	imgSrc: string;
	showPopower: boolean;
};

const PopoverImage = ({
	imgWidth,
	imgHeigth,
	imgSrc,
	showPopower,
}: PopoverImageProps) => {
	const [opened, { close, open }] = useDisclosure(false);
	const blankImage = "/images/no-poster-small.jpg";

	return (
		<>
			{showPopower ? (
				<Popover
					width={200}
					position='bottom'
					withArrow
					shadow='md'
					opened={opened}>
					<Popover.Target>
						<Link
							href={"#"}
							onMouseEnter={open}
							onMouseLeave={close}>
							<Image
								src={imgSrc.length == 0 ? blankImage : imgSrc}
								alt=''
								className={styles.poster}
								width={imgWidth}
								height={imgHeigth}
							/>
						</Link>
					</Popover.Target>

					<Popover.Dropdown
						style={{ pointerEvents: "none" }}
						bg='orange.0'
						c='brown.8'>
						<Text size='sm'>
							This popover is shown when user hovers the target element
						</Text>
					</Popover.Dropdown>
				</Popover>
			) : (
				<Image
					src={imgSrc.length == 0 ? blankImage : imgSrc}
					alt=''
					className={styles.poster}
					width={imgWidth}
					height={imgHeigth}
				/>
			)}
		</>
	);
};

export default PopoverImage;
