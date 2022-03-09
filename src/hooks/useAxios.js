import { useState, useEffect } from 'react';
import api from '../api/index';

const useAxios = ({ url }) => {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		setTimeout(() => {
			const fetchData = async () => {
				try {
					const response = await api.get(url);
					setData(response.data);
					setIsLoading(false);
					setError(null);
				} catch (err) {
					setIsLoading(false);
					setError(err.message);
				}
			};

			fetchData();
		}, 1500);
	}, [url]);

	return { data, isLoading, error };
};

export default useAxios;
