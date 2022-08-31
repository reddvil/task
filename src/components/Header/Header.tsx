import React, { memo } from 'react';
// import LangButtonComponent from '../langButton/LangButtonComponent';
// import { Link } from 'react-router-dom';

// CSS
import './header.scss';

import { ReactComponent as MeamaLogo } from 'assets/logo.svg';
import { useApi } from 'hooks';

type HeaderProps = {
	languageClicked?: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Header = (props: HeaderProps) => {

	const { data: backgroundImage } = useApi<string>('/get-background-image');
	const headerBg = { backgroundImage: 'url('+ backgroundImage + ')' };

	return (
		<div className="header">
			<div className="header__bg">
				<span style={ headerBg }></span>
			</div>
			<div className="container">
				<div className="flex">
					<div className="flex items-start" style={ {zIndex:999} }>
						<div className="header__logo">
							<MeamaLogo/>
						</div>
					</div>
					<div className="flex items-start justify-end">
						<button className="lang">Lang Btn</button>
					</div>
				</div>
			</div>
		</div>
	);
};

Header.displayName = 'Meama.Header';
export default memo<HeaderProps>(Header);
