import React, { useState } from 'react';
import './Checkbox.scss';

const Checkbox = ({ label, checked = false, register, ...props }) => {
	const [isChecked, setIsChecked] = useState(checked);

	const changeHandler = () => {
		setIsChecked(prev => !prev);
	};

	return (
		<label className='checkbox'>
			{label}
			<input
				type='checkbox'
				className='checkbox__field'
				onInput={changeHandler}
				checked={isChecked}
				{...register}
				{...props}
			/>
			<span className='checkbox__checkmark'></span>
		</label>
	);
};

export default Checkbox;
