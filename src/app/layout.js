import "@styles/app.scss";

// -- utils
import metaTag from "@utils/metaTag";

// -- styles
import "@styles/app.scss";

// -- metadata
const metadata = metaTag.data();
// -- viewport
const viewport = metaTag.viewport();

const RootLayout = (props) => {
	const { children } = props;

	return (
		<html lang="en">
			{/* -- THE HEAD -- */}
			<head>
				{/* -- core */}
				<meta http-equiv="refresh" content="900" />
				<meta http-equiv="X-UA-Compatible" content="IE=9" />
				<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

				{/* -- author */}
				<meta name="author" content="OCBC NISP - Bank OCBC NISP - With You" />
				{/* -- copyright */}
				<meta name="copyright" content="2022 OCBC NISP. All Right Reserved" />

				{/* -- robots */}
				<meta name="robots" content="index, follow" />
				<meta name="googlebot" content="index, follow" />
				<meta name="googlebot-news" content="index, follow" />
				<meta name="msnbot" content="index, follow" />
				<meta name="webcrawlers" content="index, follow" />
				<meta name="spiders" content="index, follow" />
			</head>

			{/* -- THE BODY -- */}
			<body>{children}</body>
		</html>
	);
};

export { viewport, metadata };
export default RootLayout;
