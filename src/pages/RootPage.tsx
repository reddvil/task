import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Header, ProductsSection, SkeletonLoader, Footer } from 'components';
import { useApi } from 'hooks';
import { mergeClasses } from 'utils';
import { ICategory, IProduct } from 'types';

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
			<Outlet/>
			{ error && <div>Error</div> }
			<Footer/>
		</React.Fragment>
	);
}

export default RootPage;
