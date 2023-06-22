import { lazy, Suspense } from 'react';
import Loader from 'componenets/Loader';

export const Register = lazy(() => import('pages/SignUp'));
export const Home = lazy(() => import('pages/Home'));
export const NotFound = lazy(() => import('componenets/PageNotFound'));

export const ROUTES = [
	{
		id: 'sign-up',
		path: '',
		element: (
			<Suspense fallback={<Loader />}>
				<Register />
			</Suspense>
		),
	},
	{
		id: 'home',
		path: 'home',
		element: (
			<Suspense fallback={<Loader />}>
				<Home />
			</Suspense>
		),
	},
	{
		id: 'not-found',
		path: '*',
		element: (
			<Suspense fallback={<Loader />}>
				<NotFound />
			</Suspense>
		),
	},
];
