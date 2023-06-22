import React, { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import Loader from 'componenets/Loader';
import { GENDER, SEEKING } from 'helpers/constants';
import { appSelector } from 'helpers/reduxSelectors';

export const Interest = lazy(() => import('componenets/Interest'));
export const Gender = lazy(() => import('componenets/Gender'));
export const Age = lazy(() => import('componenets/Age'));
export const Location = lazy(() => import('componenets/Location'));
export const Username = lazy(() => import('componenets/Username'));
export const Password = lazy(() => import('componenets/Password'));
export const Complete = lazy(() => import('componenets/Complete'));

const steps = [
	{
		component: (
			<Suspense fallback={<Loader />}>
				<Interest />
			</Suspense>
		),
	},
	{
		component: (
			<Suspense fallback={<Loader />}>
				<Gender data={GENDER} title='I am a' />
			</Suspense>
		),
	},
	{
		component: (
			<Suspense fallback={<Loader />}>
				<Gender data={SEEKING} title='Seeking a' />
			</Suspense>
		),
	},
	{
		component: (
			<Suspense fallback={<Loader />}>
				<Age />
			</Suspense>
		),
	},
	{
		component: (
			<Suspense fallback={<Loader />}>
				<Location />{' '}
			</Suspense>
		),
	},
	{
		component: (
			<Suspense fallback={<Loader />}>
				<Username />
			</Suspense>
		),
	},
	{
		component: (
			<Suspense fallback={<Loader />}>
				<Password />
			</Suspense>
		),
	},
	{
		component: (
			<Suspense fallback={<Loader />}>
				<Complete />
			</Suspense>
		),
	},
];

const Register = () => {
	const { step } = useSelector(appSelector);
	return <>{steps[step]?.component}</>;
};

export default Register;
