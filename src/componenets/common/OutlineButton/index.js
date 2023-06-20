import React from 'react';
import './OutineButton.scss';

const OutlineButton = ({ text, onPress, active }) => {
	return (
		<button className={`btn-outline ${active === text ? 'btn-active' : ''}`} onClick={onPress}>
			{text}
		</button>
	);
};

export default OutlineButton;
