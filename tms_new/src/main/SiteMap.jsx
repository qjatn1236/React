import React, { useState, useEffect } from 'react';
import Header from '../inc/Header';
import {
	NavLink,
	Link,
	useLocation,
	BrowserRouter,
	Route,
	Routes,
} from 'react-router-dom';

function SiteMap(props) {
	const clientName = props.clientName;
	const Gnb = props.Gnb;
	console.log(props.Gnb);

	return (
		<>
			<div className='siteMap'>
				<div className='cont_wrap'>
					<div className='btnBox'>

						<h1
							href='#'
							className='logo'
							onClick={() => {
								props.navigate('/');
							}}
						>
							<span className='ir_text'>{clientName}</span>
							<img src='' alt={clientName} />
						</h1>
						
						<button
							className='backBtn'
							onClick={() => {
								props.navigate(-1);
							}}
						>
							뒤로가기
						</button>

					</div>
				</div>
				
				<ul>
						{Gnb.map((item)=>(
								<li>{item.category}
									<ul className='nav'>
										{item.depth2 &&
											item.depth2.map((item2)=>{
												return (
													<li>{item2.category}

														{item2.depth3 &&
															item2.depth3.map((item3)=>{
																return (
																	<p>{item3.category}</p>
																)
															})
														}
													</li>
												)
											}
										)}
									</ul>
								</li>
						))}
				</ul>

			</div>
		</>
	);
}

export default SiteMap;
