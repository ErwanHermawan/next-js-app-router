// --- DefaultSEO
const DefaultSEO = {
	title: "jQuery Template Project Website Bilik Media",
	description: "Description jQuery Template Project Website Bilik Media",
	keywords: "keywords, jquery template, project website, bilik media",
	timeRefresh: 900,
	siteName: "Alpha-X Tech Bootcamp",
	siteDomain: "alpha-x.id",
	siteURL: "https://www.alpha-x.id",
	themeColor: "#fa759f",
	author: "AXTB",
	copyright: "2020 - 2024 Alpha-X Tech Bootcamp. All Right Reserved",
	robots: {
		index: true,
		follow: true,
	},
	openGraph: {
		enable: true,
		locale: "en_US",
		type: "website",
		image: "assets/img/default/og-facebook.jpg",
	},
	twitterCard: {
		enable: true,
		twitterId: "@alphax_id",
		sizeCard: "summary_large_image",
		image: "assets/img/default/twitter-card.jpg",
	},
	manifest: "",
	viewport: {
		width: "device-width",
		initialScale: 1,
		userScalable: false,
	},
	icons: {
		// -- src
		src: "/homescreen/",

		// -- shortcut
		shortcut: "favicon.ico",

		// -- android
		android: [16, 32, 96, 144, 192],

		// -- microsoft
		microsoft: [144],

		// -- apple
		apple: {
			default: "apple-icon.png",
			items: [57, 60, 72, 76, 114, 120, 144, 152, 180],
		},
	},
};

export default DefaultSEO;
