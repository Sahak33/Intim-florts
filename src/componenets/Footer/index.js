import React from 'react';
import { Box, Typography } from '@mui/material';
import { ReactComponent as Logo } from 'assets/images/logo/logo.svg';
import './Footer.scss';

import { FOOTER_LINKS } from '../../helpers/constants';

const Footer = () => {
	return (
		<footer className='footer'>
			<Logo />
			<div className='footer-links'>
				{FOOTER_LINKS.map(item => (
					<a className='footer-links__item' key={item} href='#'>
						{item}
					</a>
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
