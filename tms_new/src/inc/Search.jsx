import React, { useEffect, useState } from 'react';
import { axios } from 'axios';

const Search = () => {
	const [search, setSearch] = useState('');

	/* search input value값 저장 */
	const onChange = (value) => {
		setSearch(value.target.value);
	};

	// useEffect(() => {
	// 	console.log(search);
	// }, [search]);

	/* axios 연결 */
	// useEffect(()=> {
	//   const axios_post = () => {
	//     const data = {
	//       value : search,
	//     }
	//     axios.post('http://tms.pitap.at/api/category/category_list.php', data)
	//     .then((response) => {
	//       console.log(response.data);
	//     })
	//     .catch((error) => {
	//       console.log(error);
	//     })
	//   }

	//   axios_post();
	// }, []);

	return (
		<div className='searchBox'>
			<div className='adminWrap'>
				<button>관리자 메뉴</button>
			</div>
			<div className='searchWrap'>
				<input className='searchArea' type='text' onChange={onChange} />
				<button className='searchBtn'>검색버튼</button>
				<select className='searchSelect'>
					<option value='all' default>
						전체검색
					</option>
					<option value='word'>용어검색</option>
					<option value='guide'>가이드 검색</option>
				</select>
				<div className='recommendWrap'>추천검색어 영역</div>
			</div>
		</div>
	);
};

export default Search;
