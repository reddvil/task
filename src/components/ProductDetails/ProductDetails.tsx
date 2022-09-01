import React, { memo, useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IProduct } from 'types';
import { SkeletonLoader } from 'components';
import { useApi } from 'hooks';
import './productDetails.scss';

import backArrow from 'assets/backIcon.svg';
import { mergeClasses } from 'utils';

const ProductDetails = () => {
	const [ selectedImageIndex, setSelectedImageIndex ] = useState(0);

	const navigate = useNavigate();
	const { slug } = useParams();

	const { data: currentProduct, isLoading } = useApi<IProduct>(`ka/product/${slug}`);

	const currentProductImages = useCallback(() => {
		if(currentProduct?.otherImages) {
			return currentProduct?.imgUrls.concat(currentProduct?.otherImages);
		}
		return currentProduct?.imgUrls ?? [];
	}, [currentProduct]);

	const goBack = useCallback(() => {
		document.getElementsByTagName('body')[0].classList.remove('visible-product-detail');
		document.querySelector('.product-details')?.classList.remove('visible');
		setTimeout(() => {
			navigate(-1);
		}, 500);
	},[navigate]);

	useEffect(() => {
		setTimeout(() => {
			document.getElementsByTagName('body')[0].classList.add('visible-product-detail');
			document.querySelector('.product-details')?.classList.add('visible');
		}, 0);
		return () => {
			document.getElementsByTagName('body')[0].classList.remove('visible-product-detail');
			document.querySelector('.product-details')?.classList.remove('visible');
		};
		// renew classes on slug change
	}, [slug]);

	return (
		<div className="product-details">
			<div className="app-container">
				<div className="container product-details__wrapper">
					<div className="product-details__upper">
						<div className="block">
							<div className="flex items-center">
								<div onClick={ goBack } className="back-arrow">
									<img src={ backArrow } alt=""/>
								</div>
							</div>
						</div>
						{
							isLoading? (<SkeletonLoader/>)
								: (<React.Fragment>
									<div className="product-details__info-section">
										<div className="grid">
											<div className="grid-cols-6">
												<div className={ currentProduct?.type == 'DEFAULT' ? 'type default' : 'type' }>
													{ currentProduct && (
														<div>
															<img className="icon" src={ '' } alt=""/>
															<span className={ currentProduct?.type == 'COLD' ? 'cold' : 'hot' }>{ currentProduct?.type }</span>
														</div>
													)
													}
												</div>
												<h2 className="font-medium">{ currentProduct?.name }</h2>
												{
													currentProduct?.price &&
												<div className="product-details__price">{ currentProduct?.price }&#8382;</div>
												}
												<div className="product-details__specifications">
													{ currentProduct?.specifications?.map((o, index)=>(
														<React.Fragment key={ index }>
															<span>{ o.name }</span>
															<p>{ o.value }</p>
														</React.Fragment>)) }
												</div>
												{
													currentProduct && (
														currentProductImages()?.length >= 2 && (
															<div className="product-details__images-small flex">
																{ currentProductImages()?.map((img,i)=>(
																	<div
																		key={ i }
																		onClick={ ()=> setSelectedImageIndex(i) }
																		className={ mergeClasses('product-details__img flex items-center justify-center', { active: selectedImageIndex === i }) }
																	>
																		<img src={ img } alt=""/>
																	</div>
																)) }
															</div> )
													)
												}
											</div>
											<div className="block">
												<div className="product-details__imgs-cont flex items-center justify-center">
													<div className="bg" style={ { backgroundColor: currentProduct?.bgColor } }></div>
													<div className="product-details__img-box">
														<div className="product-details__img">
															{ currentProductImages()?.map((o,i)=>(
																<img key={ i } className={ mergeClasses({ active: selectedImageIndex === i }) } src={ o } alt=""/>
															)) }
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="product-details__bottom">
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
