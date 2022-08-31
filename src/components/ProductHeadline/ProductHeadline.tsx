import React, { memo } from 'react';
import { ICategory } from 'types';
import { mergeClasses } from 'utils';
import './productsHeadline.scss';

interface ComponentProps {
	productCategory: ICategory,
	activeCategory: ICategory,
	setCurrentCategory?: (category: ICategory) => void
}

const ProductsHeadline = ({
	productCategory,
	activeCategory,
	setCurrentCategory
}: ComponentProps) => {

	return (
		<div className="products-headline">
			<h2>{ productCategory.name }</h2>
			{ productCategory.subCategories && (
				<div className="products-headline__filter">
					{ productCategory?.subCategories?.map(subCategory => (
						<div
							key={ subCategory.id }
							className={ mergeClasses('item', { active: subCategory.id === activeCategory.id }) }
							onClick={ () => setCurrentCategory?.(subCategory) }
						>
							{ subCategory.name }
						</div>
					)) }
				</div> ) }
		</div>
	);
};

ProductsHeadline.displayName = 'Meama.Products.Headline';
export default memo<ComponentProps>(ProductsHeadline);
