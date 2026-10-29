import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});



export const metadata: Metadata = {
	title:
		"Qr Google Review",
		openGraph: {
			title:
			"Qr Google Review",
	type: "profile",
		  },
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
			
				<meta name="author" content="Dhruv Lalwani" />
				<meta name="robots" content="index, follow" />
				<meta name="theme-color" content="#ffffff" />
				<meta name="mobile-web-app-capable" content="yes" />
			
			</head>
			<body
				className={`${geistSans.variable} antialiased`}>
				<ThemeProvider
					attribute={"class"}
					defaultTheme="light"
					enableSystem
					disableTransitionOnChange>
						 
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
