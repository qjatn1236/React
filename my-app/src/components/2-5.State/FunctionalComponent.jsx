import React, { useState, useEffect } from 'react';
import Timer from '../Timer';

// export default function FunctionalComponent() {
// 	const [date, setDate] = useState(new Date());

// 	const tick = () => {
// 		setDate(new Date());
// 	};

// 	useEffect(() => {
// 		const interval = setInterval(() => tick(), 1000);

// 		return () => {
// 			clearInterval(interval);
// 		};
// 	}, []);

// 	return (
// 		<div>
// 			<h1>Hello, world!</h1>
// 			<h2>It is {date.toLocaleTimeString()}.</h2>
// 		</div>
// 	);
// }

// export default function FunctionalComponent() {
// const [count, setCount] = useState(1);
// const [name, setName] = useState('');
// const handleCountUpdate = () => {
// 	setCount(count + 1);
// };
// const handleInputChange = (e) => {
// 	setName(e.target.value);
// };
// //  렌더링 될때마다 매번 실행
// useEffect(() => {
// 	console.log('렌더링');
// });
// //  렌더링 될때마다 매번 실행
// useEffect(() => {
// 	console.log('count 변화');
// }, [count]);
// //  렌더링 될때마다 매번 실행
// useEffect(() => {
// 	console.log('name 변화');
// }, [name]);
// return (
// 	<div>
// 		<button onClick={handleCountUpdate}> Update </button>
// 		<p>count: {count}</p>
// 		<input type='text' value={name} onChange={handleInputChange} />
// 		<p>name: {name}</p>
// 	</div>
// );
// }

export default function FunctionalComponent() {
	const [showTimer, setShowTimer] = useState(false);
	return (
		<div>
			{showTimer && <Timer />}
			<button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
		</div>
	);
}
