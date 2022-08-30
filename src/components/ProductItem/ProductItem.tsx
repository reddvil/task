import React from 'react';
import { mergeClasses } from 'utils';

import { CategoryKind, IProduct } from 'types/Product';
// import { Utils } from '../../utils/Utils';
// CSS
// import './ProductItemLargeComponent.css';

interface ComponentProps {
	product: IProduct;
	categoryType: CategoryKind;
	productItemClicked?: (product: IProduct) => void;
}

const ProductItem = ({
	product,
	categoryType,
	productItemClicked
}: ComponentProps) => {

	// Utils.GetHotOrColdIconByState(product.type)
	const icon = categoryType === CategoryKind.SMALL ? undefined :
		(<img className="icon" src={ '' } alt=""/>);

	const bg = categoryType === CategoryKind.SMALL ? undefined :
		(<div className="bg" style={ { backgroundColor: product.bgColor?.toString() } }></div>);

	return (
		<div
			onClick={ () => productItemClicked?.(product) }
			className={
				mergeClasses({
					'product-item-large': categoryType === 'LARGE',
					'product-item-medium': categoryType === 'MEDIUM',
					'product-item-small': categoryType === 'SMALL',
				}, 'product-item show', `prodItem-${product.id}`)
			}
		>
			<div className="inner">
				{ bg }
				{ icon }
				<div className="img-box">
					<div className="img">
						<img src={ product.mainPhoto } alt="Product Main Photo"/>
					</div>
				</div>
				<div className="info">
					<p>{ product.name }</p>
					{
						product.price &&
						<div className="price f-bold">{ product.price }&#8382;</div>
					}
				</div>
			</div>
		</div>
	);
};

export default ProductItem;
