import React from 'react';

const Comment = () => {
	return (
		<div className='commentWrap'>
      <div className='topArea'>
        <input className='coTitle' placeholder='제목' />
        <input className='coPw' placeholder='비밀번호'/>
      </div>
			<div className='bottomArea'>
			  <textarea className='coText' placeholder='궁금한 내용을 적어주세요' />
  			<button className='coBtn' type='submit'>문의하기</button>
			</div>
		</div>
	);
};

export default Comment;
