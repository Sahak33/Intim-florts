import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import Back from 'componenets/Back';
import Button from 'componenets/common/Button';
import { setBirthday } from 'store/app/appSlice';
import { generateDays, generateYears } from 'utils/helpers';
import { MONTHS } from 'helpers/constants';
import { ReactComponent as ArrowDown } from 'assets/images/icons/arrow-down.svg';
import './Age.scss';

const Age = () => {
	const [day, setDay] = useState('');
	const [month, setMonth] = useState('');
	const [year, setYear] = useState('');
	const [error, setError] = useState('');

	const dispatch = useDispatch();

	useEffect(() => {
		if (day && month && year) {
			setError('');
		}
	}, [day, month, year]);

	const handleChangeDay = e => {
		setDay(e.target.value);
	};

	const handleChangeMonth = e => {
		setMonth(e.target.value);
	};

	const handleChangeYear = e => {
		setYear(e.target.value);
	};

	const handleNext = () => {
		if (!Boolean(day) || !Boolean(month) || !Boolean(year)) {
			setError('All fields are required');
		} else {
			if (error) {
				setError('');
			}
			let mm = '';
			MONTHS.forEach((item, idx) => {
				if (item === month) {
					if (idx + 1 < 10) {
						mm = `0${idx + 1}`;
					} else {
						mm = idx + 1;
					}
				}
			});
			let DOB = `${year}-${mm}-${day}`;
			dispatch(setBirthday(DOB));
		}
	};

	return (
		<Box className='age'>
			<Box className='age-inner'>
				<p className='description'>You must be at least 18 years old to use Intim Flort</p>
				<Box className='age-inner__form'>
					<FormControl>
						<InputLabel className='label'>Day</InputLabel>
						<Select
							className='day'
							value={day}
							label='Day'
							onChange={handleChangeDay}
							IconComponent={() => (
								<Box className='arrow-down'>
									<ArrowDown />
								</Box>
							)}
						>
							{generateDays().map(day => (
								<MenuItem key={day} value={day}>
									{day}
								</MenuItem>
							))}
						</Select>
					</FormControl>
					<FormControl>
						<InputLabel className='label'>Month</InputLabel>
						<Select
							className='month'
							value={month}
							label='Month'
							onChange={handleChangeMonth}
							IconComponent={() => (
								<Box className='arrow-down'>
									<ArrowDown />
								</Box>
							)}
						>
							{MONTHS.map(month => (
								<MenuItem key={month} value={month}>
									{month}
								</MenuItem>
							))}
						</Select>
					</FormControl>
					<FormControl>
						<InputLabel className='label'>Year</InputLabel>
						<Select
							className='year'
							value={year}
							label='Year'
							onChange={handleChangeYear}
							IconComponent={() => (
								<Box className='arrow-down'>
									<ArrowDown />
								</Box>
							)}
						>
							{generateYears().map(year => (
								<MenuItem key={year} value={year}>
									{year}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Box>
				{error && <p id='error'>{error}</p>}
				<Button title='Next' onPress={handleNext} />
				<Box className='back'>
					<Back />
				</Box>
			</Box>
		</Box>
	);
};

export default Age;
