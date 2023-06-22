import React from 'react';
import { useSelector } from 'react-redux';
import Age from 'componenets/Age';
import Complete from 'componenets/Complete';
import Gender from 'componenets/Gender';
import DatingReasons from 'componenets/Interest';
import Location from 'componenets/Location';
import Password from 'componenets/Password';
import Username from 'componenets/Username';
import { GENDER, SEEKING } from 'helpers/constants';
import { appSelector } from 'helpers/reduxSelectors';

const steps = [
	{ component: <DatingReasons /> },
	{ component: <Gender data={GENDER} title='I am a' /> },
	{ component: <Gender data={SEEKING} title='Seeking a' /> },
	{ component: <Age /> },
	{ component: <Location /> },
	{ component: <Username /> },
	{ component: <Password /> },
	{ component: <Complete /> },
];

const Register = () => {
	const { step } = useSelector(appSelector);
	return <>{steps[step]?.component}</>;
};

export default Register;
