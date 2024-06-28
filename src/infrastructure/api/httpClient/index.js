"use client";

// --- core
import { useState, useEffect } from "react";

// -- api
import httpRequest from "@api/httpRequest";

// --- RequestComponent
const RequestComponent = (param) => {
	const [ready, setReady] = useState(false);
	const [data, setData] = useState(null);
	const [error, setError] = useState(false);

	const handleFetch = async () => {
		const { data: dataResponse, error: errorResponse } = await httpRequest(
			param
		);
		if (errorResponse) {
			setError(errorResponse);
		} else {
			setData(dataResponse);
		}
		setReady(true);
	};

	useEffect(() => {
		handleFetch();
	}, []);

	return {
		ready,
		data,
		error,
	};
};

const httpClient = (param) => {
	return RequestComponent(param);
};

export default httpClient;
