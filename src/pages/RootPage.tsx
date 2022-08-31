import React from 'react';
import { useApi } from 'hooks';
import { Header, ProductsSection, SkeletonLoader, Footer } from 'components';
import { mergeClasses } from 'utils';
import { ICategory, IProduct } from 'types';
import { useNavigate } from 'react-router-dom';

function RootPage() {

	const navigate = useNavigate();
	const { data: productCategories, error, isLoading } = useApi<ICategory[]>('/ka');

	const productClick = (product: IProduct) => {
		navigate(`/product/${product.slug}`);
	};

	return (
		<React.Fragment>
			<Header/>
			{ isLoading ? (<SkeletonLoader/>) : (
				productCategories && productCategories.map(category => (
					<ProductsSection
						key={ category.id }
						productClicked={ productClick }
						productCategory={ category }
						productTypeClass={ mergeClasses({ first: category.sortIndex === 0 }) }
					/>
				))
			) }
			{ error && <div>Error</div> }
			<Footer/>
		</React.Fragment>
	);
}

export default RootPage;
