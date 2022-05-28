import React from 'react';
import { Routes, Route } from 'react-router-dom';

import NotFound from '../pages/NotFound';
import Chat from '../pages/Chat';

const r = [
	{
		path: '*',
		element: <NotFound />,
	},
	{
		path: '/',
		element: <Chat />,
	}
]

const AppRoutes: React.FC = () => {
	return (
		<Routes>
			{
				r.map(({ path, element }, index) => {
					return <Route key={index} path={path} element={element} />
				})
			}
		</Routes>
	);
};

export default AppRoutes;
