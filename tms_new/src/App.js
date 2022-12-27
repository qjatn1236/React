import React, { useState, useEffect } from 'react';
import {
	BrowserRouter,
	Route,
	Routes,
	useLocation,
	useNavigate,
} from 'react-router-dom';

import { getApi } from './api/http';
// import responseData from './data/category_list_all.json';

import Header from './inc/Header';
import Lnb from './inc/Lnb';
import Footer from './inc/Footer';
import Search from './inc/Search';

import SiteMap from './main/SiteMap';
import Main from './main/Main';
import ContenttypeView from './components/contenttype/ContenttypeView';
import ToneView from './components/toneofvoice/ToneView';
import BoardView from './components/board/BoardView';

import './scss/style.scss';
import './scss/style_nh.scss';
import Comment from './inc/Comment';
import UxwritingView from './components/uxwriting/UxwritingView';
import SelfcheckView from './components/selfcheck/SelfcheckView';

function App() {
	const location = useLocation();
	const navigate = useNavigate();
	const [locationName, setlocationName] = useState(null);
	const [clientName, setClientName] = useState('하나원큐');

	const [Gnb, setGnb] = useState(null);
  
	useEffect(() => {
		getApi('http://tms.pitap.at/api/category/category_list_all.php').then(
			(response) => {
				if (response.data !== undefined || response.data !== '') {
	        console.log(response.data.depth);
	        setGnb(response.data.depth);
				}
			},
		);
	}, []);

	useEffect(() => {
		window.scrollTo(0, 0);

		location.pathname === '/'
			? setlocationName('main')
			: setlocationName('sub');
	}, [location]);

	let newLnbText = [null];
	const handleActiveMenu = (e) => {
		e.preventDefault();

		if (e.target.className === 'Dep1') {
			if (e.target.nextElementSibling.firstElementChild !== null) {
				newLnbText[1] = e.target.nextElementSibling.firstElementChild.innerText;
			} else {
				newLnbText[1] = null;
			}
		} else if (e.target.className === 'Dep2') {
			newLnbText[0] = e.currentTarget.firstElementChild.textContent;
		} else if (e.target.className === 'Dep3') {
		}

		newLnbText[e.target.dataset.depth] = e.target.textContent;
		// console.log(newLnbText);

		localStorage.setItem('lnb', JSON.stringify(newLnbText));
	};

	return (
		<>
			<div id='wrapper' className='App'>
				<Routes>
					<Route path='components/*' element={<Search />} />
				</Routes>
				{location.pathname !== '/main/SiteMap' ? (
					<Header
						location={location.pathname}
						locationName={locationName}
						clientName={clientName}
						Gnb={Gnb}
						handleActiveMenu={handleActiveMenu}
					/>
				) : null}
				<div id='wrap'>
					<div className='container'>
						<div
							className={`contents ${locationName}`}
							style={
								location.pathname === '/' ||
								location.pathname === '/main/SiteMap'
									? { paddingLeft: '0' }
									: { paddingLeft: '350px' }
							}
						>
							<Routes>
								<Route path='components/*' element={<Lnb />} />
							</Routes>
							<Routes>
								<Route
									path='main/SiteMap'
									element={
										<SiteMap
											navigate={navigate}
											clientName={clientName}
											Gnb={Gnb}
										/>
									}
								/>
								<Route
									path='/'
									element={<Main clientName={clientName} />}
								></Route>
								{/* <Route path="main/SiteMap" element={<SiteMap />}></Route> */}
								<Route
									path='components/contenttype'
									element={<ContenttypeView />}
								></Route>
								<Route
									path='components/toneofvoice'
									element={<ToneView />}
								></Route>
								<Route path='components/board' element={<BoardView />}></Route>
								<Route
									path='components/uxwriting'
									element={<UxwritingView />}
								></Route>
								<Route
									path='components/selfcheck'
									element={<SelfcheckView />}
								></Route>
							</Routes>
						</div>
					</div>
				</div>
				<Routes>
					<Route path='components/*' element={<Comment />} />
				</Routes>
				<Footer clientName={clientName} />
			</div>
		</>
	);
}

export default App;
