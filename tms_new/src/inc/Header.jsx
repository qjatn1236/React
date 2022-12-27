import React, { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import classNames from 'classnames';

import useSticky from './useSticky';
import Snb from './Snb';

function Header(props) {
	const clientName = props.clientName;
	const [GnbHover, setGnbHover] = useState(false);
  const [GnbNum, setGnbNum] = useState(null);

	const handleMouseEnter = () => {
		setGnbHover(true);
	};
	const handleMouseLeave = () => {
		setGnbHover(false);
	};
  
  // const handleOnClick = (num) => {
	// 	setGnbNum(num);
  //   alert(GnbNum);
	// };

  // function handleOnClick(num) {
  //   setGnbNum(num);
  // }

	const { sticky, stickyRef } = useSticky();

	return (
		<>
			<header
				id='header'
				ref={stickyRef}
				className={`${props.locationName}${classNames(' ', { sticky })}`}
			>
				<div>
					<div
						className={`headerWrap${GnbHover ? ' open' : ''}`}
						onMouseLeave={handleMouseLeave}
					>
						<a href='/' className='logo'>
							<span className='ir_text'>{clientName}</span>
							<img src='' alt={clientName} />
						</a>
						<ul
							className='nav'
							style={
								GnbHover ? { paddingBottom: '50px' } : { paddingBottom: '0' }
							}
						>
							{props.Gnb &&
								props.Gnb.map((item, index) => {
									return (
										<li key={item.idx} onClick={props.handleActiveMenu}>
											<Link
												to={'/components/' + item.root + '?idx=' + item.idx}
												onMouseEnter={handleMouseEnter}
												onClick={() => {
                          setGnbNum(index);
                          alert(GnbNum);
                        }}
											>
												{item.category}
											</Link>
											{GnbHover ? (
												<ul>
													{item.depth2 &&
														item.depth2.map((item2) => {
															return (
																<li key={item2.idx}>
																	<Link
																		to={
																			'/components/' +
																			item.root +
																			'?idx=' +
																			item2.idx
																		}
                                    onClick={() => {
                                      setGnbNum(index);
                                      alert(GnbNum);
                                    }}
																	>
																		{item2.category}
																	</Link>
																</li>
															);
														})}
												</ul>
											) : null}
										</li>
									);
								})}
						</ul>
						{GnbHover ? (
							<Link to={'/main/SiteMap'} className='moreView'>
								전체보기
							</Link>
						) : null}
					</div>
				</div>
			</header>
			{/* {sticky && (
				<div
					style={{
						height: `${stickyRef.current?.clientHeight}px`,
					}}
				/>
			)} */}
			<Routes>
				<Route
					path='components/*'
					element={
						<Snb
              Gnb={props.Gnb}
						/>
					}
				/>
			</Routes>
		</>
	);
}

export default Header;
