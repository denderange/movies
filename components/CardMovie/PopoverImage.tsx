"use client";

import { Popover, Text, Loader } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import Image from "next/image";
import styles from "./CardMovie.module.scss";
import { sliceText } from "@/utils/sliceText";
import { useState } from "react";

type PopoverImageProps = {
	imgWidth: number;
	imgHeigth: number;
	imgSrc: string;
	showPopower: boolean;
	textTooltip: string;
	href: string;
};

const PopoverImage = ({
	imgWidth,
	imgHeigth,
	imgSrc,
	textTooltip,
	showPopower,
	href,
}: PopoverImageProps) => {
	const [opened, { close, open }] = useDisclosure(false);
	const blankImage = "/images/no-poster-small.jpg";
	const [loading, setLoading] = useState(true);

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
							href={href}
							onMouseEnter={open}
							onMouseLeave={close}>
							<div style={{ width: `${imgWidth}px`, height: `${imgHeigth}px` }}>
								<Image
									src={imgSrc.length == 0 ? blankImage : imgSrc}
									alt=''
									className={styles.poster}
									width={imgWidth}
									height={imgHeigth}
								/>
							</div>
						</Link>
					</Popover.Target>

					<Popover.Dropdown
						style={{ pointerEvents: "none" }}
						bg='orange.0'
						c='brown.8'>
						<Text size='sm'>{sliceText(textTooltip, 220)}</Text>
					</Popover.Dropdown>
				</Popover>
			) : (
				<div style={{ width: `${imgWidth}px`, height: `${imgHeigth}px` }}>
					<Image
						src={imgSrc.length == 0 ? blankImage : imgSrc}
						alt=''
						className={styles.poster}
						width={imgWidth}
						height={imgHeigth}
					/>
				</div>
			)}
		</>
	);
};

export default PopoverImage;
