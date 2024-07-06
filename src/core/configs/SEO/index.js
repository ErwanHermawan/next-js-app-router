// --- DefaultSEO

const DefaultSEO = {
	friendly: true,
	// done
	title: "jQuery Template Project Website Bilik Media",
	// done
	description: "Description jQuery Template Project Website Bilik Media",
	// done
	keywords: "keywords, jquery template, project website, bilik media",
	// need implement
	timeRefresh: 900,
	// need implement
	siteAppName: "Alpha-X Tech Bootcamp",
	// need implement
	siteDomain: "alpha-x.id",
	// need implement
	siteURL: "https://www.alpha-x.id",
	// need implement (viewport)
	siteTheme: "#fa759f",
	// need implement
	author: "AXTB",
	// need implement
	copyright: "2020 - 2024 Alpha-X Tech Bootcamp. All Right Reserved",
	openGraph: {
		enable: true,
		url: "https://www.facebook.com/alpha-x.id",
		type: "website",
		section: "home",
		published_time: "2019-04-26 17:35:30T+07:00",
		modified_time: "2019-04-26 17:35:30T+07:00",
		expiration_time: "2019-04-26 17:35:30T+07:00",
		image: "assets/img/default/og-facebook.jpg",
		imageType: "image/jpeg",
	},
	twitterCard: {
		enable: true,
		twitterId: "@alphax_id",
		sizeCard: "summary_large_image",
		image: "assets/img/default/twitter-card.jpg",
	},
	cannonical: "",
	manifest: "",
	icons: {
		// Web Favicon
		webFavicon: "assets/img/homescreen/favicon.ico",

		// Add to Home Screen
		homescreen: {
			// Android
			android: {
				s16: "assets/img/homescreen/favicon-16x16.png",
				s32: "assets/img/homescreen/favicon-32x32.png",
				s96: "assets/img/homescreen/favicon-96x96.png",
				s144: "assets/img/homescreen/android-icon-144x144.png",
				s192: "assets/img/homescreen/android-icon-192x192.png",
			},

			// Microsoft
			microsoft: {
				s144: "assets/img/homescreen/ms-icon-144x144.png",
			},

			// iOS
			iOS: {
				default: "assets/img/homescreen/apple-icon.png",
				s57: "assets/img/homescreen/apple-icon-57x57.png",
				s60: "assets/img/homescreen/apple-icon-60x60.png",
				s72: "assets/img/homescreen/apple-icon-72x72.png",
				s76: "assets/img/homescreen/apple-icon-76x76.png",
				s114: "assets/img/homescreen/apple-icon-114x114.png",
				s120: "assets/img/homescreen/apple-icon-120x120.png",
				s144: "assets/img/homescreen/apple-icon-144x144.png",
				s152: "assets/img/homescreen/apple-icon-152x152.png",
				s180: "assets/img/homescreen/apple-icon-180x180.png",
			},
		},
	},
};

export default DefaultSEO;
