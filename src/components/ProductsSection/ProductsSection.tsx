import React, {memo, useEffect, useState} from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';

// Components
import { ProductItem, ProductHeadline } from 'components';

import { ICategory, IProduct } from 'types';
import { isEmpty, mergeClasses } from 'utils';

import './productsSection.scss';

interface ComponentProps {
	productCategory: ICategory,
	productTypeClass?: string,
	productClicked?: (product: IProduct) => void;
}

const ProductsSection = ({
	productCategory,
	productTypeClass,
	productClicked
}: ComponentProps) => {

	const [ currentCategory, setCurrentCategory ] = useState<ICategory>(() => productCategory);

	useEffect(() => {
		if(isEmpty(productCategory.products)) {
			setCurrentCategory(productCategory.subCategories[0]);
		}
	}, [productCategory]);

	return (
		<div className={ mergeClasses('products-section', productTypeClass) }>
			<div className="container">
				<ProductHeadline
					key={ productCategory.id }
					setCurrentCategory={ (category) => setCurrentCategory(category) }
					productCategory={ productCategory }
					activeCategory={ currentCategory }
				/>
				<ScrollContainer className="scroller flex flex-nowrap">
					{ currentCategory.products?.map(product => (
						<ProductItem
							key={ product.id }
							productItemClicked={ productClicked }
							categoryType={ productCategory.categoryType }
							product={ product }
						/>
					)) }
				</ScrollContainer>
			</div>
		</div>
	);
};

ProductsSection.displayName = 'Meama.Products.Section';
export default memo<ComponentProps>(ProductsSection);
