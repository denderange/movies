/** @type {import('next').NextConfig} */
const nextConfig = {
	sassOptions: {
		prependData: `@import "./_mantine.scss";`,
	},
	experimental: {
		optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
	},
	images: {
		domains: ["image.tmdb.org"],
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "image.tmdb.org",
				port: "",
			},
		],
	},
};

export default nextConfig;
