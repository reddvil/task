import React from 'react';
import { mergeClasses } from 'utils';
import { CategoryKind, IProduct } from 'types';

// icons
import hotDrink from 'assets/hotDrink.svg';
import coldDrink from 'assets/coldDrink.svg';

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

	const drinkType = product.type === 'HOT' ? hotDrink : coldDrink;

	const icon = product.type === 'DEFAULT' ? undefined :
		(<img className="icon" src={ drinkType } alt="drinkTypeIcon"/>);

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
				},'product-item show', `prodItem-${product.id}`)
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
