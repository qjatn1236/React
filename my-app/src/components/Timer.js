import React, { useEffect } from 'react';

export default function Timer() {
	useEffect(() => {
		const timer = setInterval(() => {
			console.log('타이머 돌아간다잉 ~~~');
		}, 1000);

		return () => {
			clearInterval(timer);
			console.log('타이머 종료된다잉 ~~~~');
		};
	}, []);

	return (
		<div>
			<span> 타이머를 시작합니다 콘솔을 보세요! </span>
		</div>
	);
}
