const metaTagIcons = () => {
	// -- shortcut
	const shortcut = "/homescreen/favicon.ico";

	// -- icon
	const iconSizes = [16, 32, 96, 144, 192];
	const icon = iconSizes.map((val, idx) => ({
		url: `/homescreen/favicon-${val}x${val}.png`,
		sizes: `${val}x${val}`,
		type: "image/png",
	}));

	// -- apple
	const appleSizes = [57, 60, 72, 76, 114, 120, 144, 152, 180];
	const apple = appleSizes.map((val, idx) => ({
		url: `/homescreen/apple-icon-${val}x${val}.png`,
		sizes: `${val}x${val}`,
	}));
	apple.unshift({ url: "/homescreen/apple-icon.png" });

	// -- other
	const other = [
		{
			rel: "apple-touch-startup-image",
			url: "/homescreen/apple-icon.png",
		},
	];

	return {
		shortcut,
		icon,
		apple,
		other,
	};
};

export default metaTagIcons;
