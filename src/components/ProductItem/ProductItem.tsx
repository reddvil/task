import React, { memo } from 'react';
import { mergeClasses } from 'utils';
import { CategoryKind, IProduct } from 'types';

// ICONS
import hotDrink from 'assets/hotDrink.svg';
import coldDrink from 'assets/coldDrink.svg';

//CSS
import './productItem.scss';

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
		(<img className="product-item__icon" src={ drinkType } alt="drinkTypeIcon"/>);

	const bg = categoryType === CategoryKind.SMALL ? undefined :
		(<div className="product-item__bg" style={ { backgroundColor: product.bgColor?.toString() } }></div>);

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
			<div className="product-item__inner">
				{ bg }
				{ icon }
				<div className="product-item__img-box">
					<div className="product-item_img">
						<img src={ product.mainPhoto } alt="Product Main Photo"/>
					</div>
				</div>
				<div className="product-item__info">
					<p>{ product.name }</p>
					{
						product.price &&
						<div className="product-item__price">{ product.price }&#8382;</div>
					}
				</div>
			</div>
		</div>
	);
};

ProductItem.displayName = 'Meama.Product.Item';
export default memo<ComponentProps>(ProductItem);
