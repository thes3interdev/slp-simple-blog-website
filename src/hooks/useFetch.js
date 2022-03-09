import { useState, useEffect } from 'react';

const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const abortController = new AbortController();

		setTimeout(() => {
			fetch(url, { signal: abortController.signal })
				.then((response) => {
					if (!response.ok) {
						/** error returning back from server */
						throw Error('Could not fetch the data from the resource.');
					}
					return response.json();
				})
				.then((data) => {
					setIsLoading(false);
					setData(data);
					setError(null);
				})
				.catch((err) => {
					if (err.name === 'AbortError') {
						console.log('A fetch abort has occured...');
					} else {
						/** automatically catches network or connection errors */
						setIsLoading(false);
						setError(err.message);
					}
				});
		}, 1000);

		// abort the fetch
		return () => abortController.abort();
	}, [url]);

	return { data, isLoading, error };
};

export default useFetch;
