import './App.css';
import React from 'react';
import Tab from './components/Tab';

import { TAB_LIST } from './mock';

function App() {
	// // api call
	// const [tablist, setTabList] = useState([]);

	// useEffect(() => {
	// 	// fetch
	// 	setTabList([]); // response.dat
	// }, []);

	return (
		<div className='App'>
			<header className='App-header'>
				<div className='tab-container'>
					{TAB_LIST.map((item) => (
						<Tab
							key={item.title}
							title={item.title}
							children={item.children}
							img={item.img}
						/>
					))}
				</div>
			</header>
		</div>
	);
}
export default App;
