import { Route, Routes } from 'react-router-dom';

import { ROUTES } from './router';

const App = () => (
	<Routes>
		{ROUTES.map(item => (
			<Route key={item.id} {...item} />
		))}
	</Routes>
);

export default App;
