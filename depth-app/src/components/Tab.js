import React, { useState } from 'react';

function Tab({ title, children, img }) {
	const [isHover, setIsHover] = useState(false);

	return (
		<div
			className='container'
			onMouseOver={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
		>
			<div>{children ? <span>{title}</span> : <a href='/'>{title}</a>}</div>
			{isHover &&
				children &&
				children.map((child) => (
					<div className='child-container'>
						<Tab
							key={child.title}
							title={child.title}
							children={child.children}
							img={child.img}
						/>
						{/* {img && <img src={img} />} */}
					</div>
				))}
		</div>
	);
}
export default Tab;
