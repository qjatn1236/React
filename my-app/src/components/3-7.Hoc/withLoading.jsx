import React, { useState, useEffect } from 'react';

export default function withLoading(Component) {
	const WithLoadingComponent = (props) => {
		const [loding, setLoding] = useState(true);
		useEffect(() => {
			const timer = setTimeout(() => setLoding(false), 1000);

			return () => clearTimeout(timer);
		}, []);
		return loding ? <p>Loding ...</p> : <Component {...props} />;
	};

	return WithLoadingComponent;
}
