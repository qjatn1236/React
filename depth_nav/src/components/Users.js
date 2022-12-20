import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Users() {
	const [users, setUsers] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [scdepth, setScdepth] = useState(null);

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				// 요청이 시작 할 때에는 error 와 users 를 초기화하고
				setError(null);
				setUsers(null);
				// loading 상태를 true 로 바꿉니다.
				setLoading(true);
				const response = await axios.get(
					'http://tms.pitap.at/api/category/category_list.php',
				);
				setUsers(response.data.one_depth); // 데이터는 response.data 안에 들어있습니다
				setScdepth(response.data.second_depth.map((data) => data[0].category));
				// console.log(response.data);
				// console.log(res.seconde.data.one_depth);
				console.log(response.data.second_depth);
				console.log(response.data.second_depth.map((data) => data[0].category));
			} catch (e) {
				setError(e);
			}
			setLoading(false);
		};

		fetchUsers();
	}, []);

	if (loading) return <div>로딩중..</div>;
	if (error) return <div>에러가 발생했습니다</div>;
	if (!users) return null;

	return (
		<ul>
			{users.map((user) => (
				<li key={user.idx}>
					{user.category}
					<ul>
						{scdepth.map((scuser) => (
							<li key={scuser.idx}>{scuser.category}</li>
						))}
					</ul>
				</li>
			))}
		</ul>
	);
}
