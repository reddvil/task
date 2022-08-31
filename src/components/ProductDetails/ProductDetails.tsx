import React, { memo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { IProduct } from 'types';
import { SkeletonLoader } from 'components';
import { useApi } from 'hooks';
import './productDetails.scss';

import backArrow from 'assets/backIcon.svg';
import { mergeClasses } from 'utils';

const ProductDetails = () => {
	const [ imgSelectedIndexState, setImgSelectedIndexState ] = useState(0);

	const navigate = useNavigate();
	const { t } = useTranslation();
	const { slug } = useParams();

	const { data: currentProduct, isLoading } = useApi<IProduct>(`ka/product/${slug}`);

	const currentProductAllImages = () => {

		if(currentProduct?.otherImages){
			return currentProduct?.imgUrls.concat(currentProduct?.otherImages);
		}
		return currentProduct?.imgUrls ?? [];
	};

	return (
		<div className="product-details">
			<div className="app-container">
				<div className="container">
					<div className="top">
						<div className="row">
							<div className="col-6 flex items-center">
								<div onClick={ () => navigate(-1) } className="back-arrow">
									<img src={ backArrow } alt=""/>
								</div>
							</div>
						</div>
						{
							isLoading? (<SkeletonLoader/>)
								: (<React.Fragment>
									<div className="info-section">
										<div className="row">
											<div className="col-6">
												<div className={ currentProduct?.type == 'DEFAULT' ? 'type default' : 'type' }>
													{ currentProduct && (
														<div>
															<img className="icon" src={ '' } alt=""/>
															<span className={ currentProduct?.type == 'COLD' ? 'cold' : 'hot' }>{ t(currentProduct?.type) }</span>
														</div>
													)
													}
												</div>
												<h2 className="f-lgv">{ currentProduct?.name }</h2>
												{
													currentProduct?.price &&
												<div className="price">{ currentProduct?.price }&#8382;</div>
												}
												<div className="specifications">
													{
														currentProduct?.specifications?.map((o, index)=>(
															<React.Fragment key={ index }>
																<span>{ o.name }</span>
																<p>{ o.value }</p>
															</React.Fragment>))
													}
												</div>
												{
													currentProduct && (
														currentProductAllImages()?.length >= 2 && (
															<div className="small-imgs flex">
																{ currentProductAllImages()?.map((o,i)=>(
																	<div
																		key={ i }
																		onClick={ ()=> setImgSelectedIndexState(i) }
																		className={ 'img flex items-center justify-center '+(i==imgSelectedIndexState ?'active':'') }
																	>
																		<img src={ o } alt=""/>
																	</div>
																)) }
															</div> )
													)
												}
											</div>
											<div className="col-6">
												<div className="imgs-cont flex items-center justify-center">
													<div className="bg" style={ { backgroundColor: currentProduct?.bgColor } }></div>
													<div className="img-box">
														<div className="img">
															{ currentProductAllImages()?.map((o,i)=>(
																<img key={ i } className={ mergeClasses({ active: i === imgSelectedIndexState }) } src={ o } alt=""/>
															)) }
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="bottom">
										{ currentProduct?.shortDescription && <div className="border-line"></div> }
									</div>
								</React.Fragment>
								)
						}
					</div>
				</div>
			</div>
		</div>
	);
};

ProductDetails.displayName = 'Meama.Product.Details';
export default memo(ProductDetails);
