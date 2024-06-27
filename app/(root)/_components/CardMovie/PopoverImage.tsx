"use client";

import { Popover, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import Image from "next/image";
import styles from "./CardMovie.module.scss";

const PopoverImage = () => {
	const [opened, { close, open }] = useDisclosure(false);

	return (
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
						src='/images/no-poster-small.jpg'
						alt=''
						className={styles.poster}
						width={119}
						height={170}
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
	);
};

export default PopoverImage;
