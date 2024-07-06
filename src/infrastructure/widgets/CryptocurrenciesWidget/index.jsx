// -- model
import cryptoCurrenciesModel from "@models/cryptoCurrencies";

// -- hooks
import useFirstLoad from "@hooks/useFirstLoad";

// -- organisms
import Cryptocurrencies from "@organisms/Cryptocurrencies";

const CryptocurrenciesWidget = () => {
	const { ready, data, error } = useFirstLoad(cryptoCurrenciesModel.list());

	return <Cryptocurrencies ready={ready} data={data?.data} error={error} />;
};

export default CryptocurrenciesWidget;
