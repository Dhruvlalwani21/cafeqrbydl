import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	typescript: {
		ignoreBuildErrors: true, // ⚠ Use only if you're sure type errors can be ignored
	},
	images: {
		unoptimized: true,
	},
	// You can add more config options below if needed
};

export default nextConfig;
