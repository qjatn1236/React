import './App.css';
import { useState } from 'react';

function App() {
	const [글제목, 글제목변경] = useState([
		'남자 코트 추천',
		'파이썬 독학',
		'강남 우동 맛집',
	]);
	const [good, setGood] = useState(0);

	return (
		<div className='App'>
			<div className='black-nav'>
				<h4>React-Blog</h4>
			</div>

			<button
				onClick={() => {
					let copy = [...글제목];
					copy.sort();
					글제목변경(copy);
				}}
			>
				글수정
			</button>

			<div className='list'>
				<h4>
					{글제목[0]}
					<span
						onClick={() => {
							setGood(good + 1);
						}}
					>
						❤
					</span>
					{good}
				</h4>
				<p>2월 17일 발행</p>
			</div>

			<div className='list'>
				<h4>{글제목[1]}</h4>
				<p>2월 17일 발행</p>
			</div>

			<div className='list'>
				<h4>{글제목[2]}</h4>
				<p>2월 17일 발행</p>
			</div>

			<Modal></Modal>
		</div>
	);
}
function Modal() {
	return (
		<div className='modal'>
			<h4>제목</h4>
			<p>날짜</p>
			<p>상세내용</p>
		</div>
	);
}

export default App;
