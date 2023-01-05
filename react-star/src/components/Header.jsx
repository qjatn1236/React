import React, { useContext } from 'react';
import { ThemeContext } from './../context/ThemeContext';

export default function Header() {
	const { isDark } = useContext(ThemeContext);
	console.log(isDark);

	return (
		<header
			className='header'
			style={{
				backgroundColor: isDark ? 'black' : 'lightgray',
				color: isDark ? 'white' : 'black',
			}}
		>
			<h1>Welcole 홍길동 ~!</h1>
		</header>
	);
}
