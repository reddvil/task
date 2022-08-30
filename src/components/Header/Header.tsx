import React from 'react';
// import LangButtonComponent from '../langButton/LangButtonComponent';
// import { Link } from 'react-router-dom';

// CSS
import './header.scss';

// Images
// import patternSrc from '../../assets/img/pattern.png';
import logoSrc from 'assets/logo.svg';
// import { Language } from '../../models/Language';
// import { useTranslation } from 'react-i18next';
import { useApi } from 'hooks';

interface HeaderComponentsProps {
	languageClicked?: () => void;
	// languages:Language[]
}

const Header:React.FC<HeaderComponentsProps> = (props :any) => {

	const { data: backgroundImage, isLoading } = useApi<any>('https://cms.meamacollect.ge/meama-collect/api/client/get-background-image');
	// const {t} = useTranslation();

	console.log(backgroundImage,isLoading);


	return (
		<div className="header-component">
			<div className="bg">
				<span style={ { backgroundImage: 'url('+ backgroundImage + ')' } }></span>
			</div>
			<div className="container">
				<div className="row no-gutters">
					<div className="col-4 flex items-start" style={ {zIndex:999} }>
						<div className="logo">
							<img src={ logoSrc } alt=""/>
						</div>
					</div>
					<div className="col-4 flex items-start justify-end" style={ {zIndex:999} }>
						<button>lang</button>
						{ /*<LangButtonComponent languages={ languages } languageClicked={ languageClicked }/>*/ }
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
