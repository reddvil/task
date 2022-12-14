import React, { memo } from 'react';
import { useApi } from 'hooks';
import { IContactInfo } from 'types';
import './footer.scss';

type FooterProps = {
	language?: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Footer = ({ language }: FooterProps) => {

	const { data: social } = useApi<IContactInfo>('/ka/contact-info');

	return (
		<div className="footer">
			<div className="container">
				<div className="footer__wrapper">
					<div className="flex justify-between">
						<div className="flex items-end">
							<div>
								<p>{ social?.name }</p>
								<a className="phone font-bold" href={ 'tel:' + social?.value }>{ social?.value }</a>
							</div>
						</div>
						<div className="flex items-end content-end">
							<div className="footer__socials">
								{ social?.socialLinks.map((el, index) => {
									return(
										<a key={ index } href={ el.link } target="_blank" rel="noreferrer">
											<img src={ el.imageUrl } alt="footerImg"/>
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

Footer.displayName = 'Meama.Footer';
export default memo<FooterProps>(Footer);
