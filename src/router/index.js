import { lazy, Suspense } from 'react';

export const Register = lazy(() => import('pages/SignUp'));
export const Home = lazy(() => import('pages/Home'));

export const ROUTES = [
	{
		id: 'sign-up',
		path: '',
		element: (
			<Suspense fallback={<div className='loader'></div>}>
				<Register />
			</Suspense>
		),
	},
	{
		id: 'home',
		path: 'home',
		element: (
			<Suspense fallback={<div className='loader'></div>}>
				<Home />
			</Suspense>
		),
	},
];
