import React from 'react';
// CSS
import { useApi } from 'hooks';
import { IContactInfo } from 'types';
import './footer.scss';

type FooterProps = {
	language?: string
}

const Footer = ({ language }: FooterProps) => {

	const { data: social } = useApi<IContactInfo>('https://cms.meamacollect.ge/meama-collect/api/client/ka/contact-info');

	return (
		<div className="footer-component">
			<div className="container">
				<div className="inner">
					<div className="row no-gutters">
						<div className="col-6 d-flex align-items-end">
							<div>
								<p>{ social?.name }</p>
								<a className="phone f-bold" href={ 'tel:' + social?.value }>{ social?.value }</a>
							</div>
						</div>
						<div className="col-6 d-flex align-items-end justify-content-end">
							<div className="socials">
								{ social?.socialLinks.map((o, index) => {
									return(
										<a key={ index } href={ o.link } target="_blank" rel="noreferrer">
											<img src={ o.imageUrl } alt="footerImg"/>
										</a>
									);
								}) }
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
