import React from 'react';
import { useState, useEffect, useRef } from 'react';

export default function Review() {
	// const [count, setCount] = useState(0);
	// const countRef = useRef(0);

	// console.log(countRef);

	// function increaseCountState() {
	// 	setCount(count + 1);
	// }

	// function increaseCountRef() {
	// 	countRef.current = countRef.current + 1;
	// 	console.log('Ref : ', countRef.current);
	// }

	// const [renderer, setRenderer] = useState(0);
	// const countRef = useRef(0);
	// let countVar = 0;

	// function doRendering() {
	// 	setRenderer(renderer + 1);
	// }

	// function increaseRef() {
	// 	countRef.current = countRef.current + 1;
	// 	console.log('Ref : ', countRef.current);
	// }
	// function increaseVar() {
	// 	countVar = countVar + 1;
	// 	console.log('Var : ', countVar);
	// }

	// const printResults = () => {
	// 	console.log(`ref: ${countRef.current}, var: ${countVar}`);
	// };

	// const [count, setCount] = useState(1);
	// const renderCount = useRef(1);
	// useEffect(() => {
	// 	renderCount.current = renderCount.current + 1;
	// 	console.log('렌더링 수 : ', renderCount.current);
	// });
	const [time, setTime] = useState(1);
	const [names, setNames] = useState(['홍길동', '김민수']);
	const [input, setInput] = useState('');

	const handleClick = () => {
		setTime(time + 1);
	};

	const handleInputChange = (e) => {
		setInput(e.target.value);
	};

	const handleUpload = () => {
		setNames((prevState) => {
			return [input, ...prevState];
		});
	};

	console.log(input);

	return (
		<div>
			{/* <p>State : {count}</p>
			<p>Ref : {countRef.current}</p>
			<button onClick={increaseCountState}>State 올려</button>
			<button onClick={increaseCountRef}>Ref 올려</button>
			<p>Ref: {countRef.current}</p>
			<p>Var: {countVar}</p>
			<button onClick={doRendering}>렌더 고고</button>
			<button onClick={increaseRef}>Ref 올려</button>
			<button onClick={increaseVar}>Var 올려</button>
			<button onClick={printResults}>Ref Var 값 출력</button> */}
			<span>현재 시각 : {time} 시</span>
			<button onClick={handleClick}>Update</button>

			<br />
			<br />
			<input type='text' value={input} onChange={handleInputChange} />
			<button onClick={handleUpload}>Upload</button>
			{names.map((name, idx) => {
				return <p key={idx}>{name}</p>;
			})}
		</div>
	);
}
