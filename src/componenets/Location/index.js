import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/material';
import Back from 'componenets/Back';
import Button from 'componenets/common/Button';
import { chooseLocation, cleanLocations, next } from 'store/app/appSlice';
import { fetchLocations } from 'store/app/thunks';
import { appSelector } from 'helpers/reduxSelectors';
import useDebounce from 'hooks/useDebounce';
import { ReactComponent as Search } from 'assets/images/icons/search.svg';
import './Location.scss';

const Location = () => {
	const [filterInputValue, setFilterInputValue] = useState('');
	const [error, setError] = useState(null);

	const { locations, location } = useSelector(appSelector);
	const debouncedSearch = useDebounce(filterInputValue, 500);

	const dispatch = useDispatch();

	useEffect(() => {
		if (debouncedSearch) {
			setError(null);
			filterMessages();
		}
	}, [debouncedSearch]);

	const filterMessages = () => {
		dispatch(fetchLocations(filterInputValue.toUpperCase()));
	};

	const handleInputValue = e => {
		setFilterInputValue(e.target.value);
		if (!Boolean(e.target.value)) {
			dispatch(cleanLocations());
		}
	};

	const handleChooseLocation = location => () => {
		dispatch(chooseLocation(location));
	};

	const handleNext = () => {
		if (!location) {
			setError('Please choose location');
		} else {
			dispatch(next());
		}
	};

	return (
		<Box className='location'>
			<p className='description'>
				Your location will never be shared with third parties, you data is secure
			</p>
			<Box className='location-box'>
				<input
					className='text-field'
					type='text'
					placeholder='Location'
					value={filterInputValue}
					onChange={handleInputValue}
				/>
				<Search className='search' />
			</Box>
			{error && !location && <p id='error'>{error}</p>}
			{!!locations.length && !location && (
				<Box className='location-result'>
					{locations.map(item => (
						<p className='description' key={item} onClick={handleChooseLocation(item)}>
							{item}
						</p>
					))}
				</Box>
			)}
			{location && <p className='description'>Chosen location: {location}</p>}
			<Button title='Next' onPress={handleNext} />
			<Box className='back'>
				<Back />
			</Box>
		</Box>
	);
};

export default Location;
