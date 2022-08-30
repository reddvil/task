import React from 'react';
import { ICategory } from 'types/Product';

// CSS
// import './ProductsHeadlineComponent.css';

interface ComponentProps {
	productCategory: ICategory,
	categoryClicked?: (category: ICategory) => void
}

const ProductsHeadline = ({
	productCategory,
	categoryClicked
}: ComponentProps) => {

	const subCategoryClicked = (productCategory: ICategory) => {

		if(categoryClicked){
			categoryClicked(productCategory);
		}
	};

	return (
		<div className="products-headline">
			<h2 className="f-lgv">{ productCategory.name }</h2>
			{
				productCategory.subCategories ?
					(
						<div className="filter">
							{ productCategory?.subCategories?.map(subCategory => (
								<div
									key={ subCategory.id }
									className="active item"
									onClick={ () => subCategoryClicked(subCategory) }
								>
									{ subCategory.name }
								</div>
							)) }
						</div>
					): (<></>)
			}
		</div>
	);
};

export default ProductsHeadline;
