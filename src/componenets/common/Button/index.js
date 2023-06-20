import React from 'react';
import './Button.scss';

const Button = ({ title, onPress }) => {
	return (
		<button className='btn-primary' onClick={onPress}>
			{title}
		</button>
	);
};

export default Button;
