import "@styles/app.scss";

import DefaultSEO from "@configs/SEO";

const metadata = {
	title: {
		template: `%s - ${DefaultSEO.title}`,
		default: DefaultSEO.title,
	},
	description: DefaultSEO.description,
	keywords: DefaultSEO.keywords,
	openGraph: {
		title: DefaultSEO.title,
		description: DefaultSEO.description,
		url: DefaultSEO.openGraph.url,
		siteName: DefaultSEO.siteDomain,
		locale: "en_US",
		type: DefaultSEO.openGraph.type,
		section: DefaultSEO.openGraph.section,
	},
};

const RootLayout = (props) => {
	const { children } = props;

	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
};

export { metadata };
export default RootLayout;
