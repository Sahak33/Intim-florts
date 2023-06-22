import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { FOOTER_LINKS } from 'helpers/constants';
import { ReactComponent as Logo } from 'assets/images/logo/logo.svg';
import './Footer.scss';

const Footer = () => {
	return (
		<footer className='footer'>
			<Logo />
			<div className='footer-links'>
				{FOOTER_LINKS.map(item => (
					<NavLink className='footer-links__item' key={item} to=''>
						{item}
					</NavLink>
				))}
			</div>
			<Box className='footer-line'></Box>
			<Typography className='footer-copyright'>
				&copy; {new Date().getFullYear()} Intim Florts | All Rights Reserved.
			</Typography>
		</footer>
	);
};

export default Footer;
