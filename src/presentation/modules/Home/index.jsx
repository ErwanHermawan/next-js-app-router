"use client";

// -- core
import { useEffect } from "react";

// -- states
import useStateHeader from "@states/header";

// -- widgets
import CalculateWidget from "@widgets/CalculateWidget";
import SubsribeWidget from "@widgets/SubscribeWidget";
import CryptocurrenciesWidget from "@widgets/CryptocurrenciesWidget";
import InvestSmartWidget from "@widgets/InvestSmartWidget";
import StatisticsWidget from "@widgets/StatisticsWidget";
import ProfitInvestmentWidget from "@widgets/ProfitInvestmentWidget";

// -- components
import HeroBanner from "@organisms/HeroBanner";
import Numbers from "@organisms/Numbers";
import WhyCrappo from "@organisms/WhyCrappo";

const Home = (props) => {
	const { ssrData } = props;
	const { heroBanner, numbers, whyCrappo } = ssrData;

	// heroBanner
	const { data: heroBannerData, error: heroBannerError } = heroBanner;

	// numbers
	const { data: numbersData, error: numbersError } = numbers;

	// whyCrappo
	const { data: whyCrappoData, error: whyCrappoError } = whyCrappo;

	// set active header menu
	const { setMenu } = useStateHeader();
	useEffect(() => {
		setMenu("");
	}, []);

	return (
		<>
			<HeroBanner ready data={heroBannerData.data} error={heroBannerError} />
			<Numbers ready data={numbersData.data} error={numbersError} />
			<WhyCrappo ready data={whyCrappoData.data} error={whyCrappoError} />
			{/* CSR */}
			<CalculateWidget />
			<CryptocurrenciesWidget />
			{/* Event Call */}
			<InvestSmartWidget />
			<StatisticsWidget />
			<ProfitInvestmentWidget />

			<SubsribeWidget />
		</>
	);
};

export default Home;
