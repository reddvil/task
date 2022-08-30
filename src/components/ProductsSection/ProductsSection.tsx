import React, { useState , useEffect } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';

// Components
import { ProductItem, ProductHeadline } from 'components';

// CSS
// import './ProductsSectionComponent.css';
import { ICategory, IProduct } from 'types/Product';

interface ComponentProps {
	productCategory: ICategory,
	typeClass?: string,
	productClicked?: (product: IProduct) => void;
}

const ProductsSection = ({
	productCategory,
	typeClass,
	productClicked
}: ComponentProps) => {
	//
	// const [productCategoryState, setProductCategoryState] = useState<ICategory>(productCategory);
	//
	// const [currentProducts, setCurrentProducts] = useState<IProduct[] | null>([]);
	//
	// const [allDefaultProducts, setAllDefaultProducts] = useState<IProduct[] | null>(null);
	//
	// useEffect(() => {
	//
	// 	if(allDefaultProducts==null){
	//
	// 		let tempProducts: IProduct[] = [];
	//
	// 		tempProducts = tempProducts.concat(productCategory?.products?? []);
	//
	// 		productCategory.subCategories?.forEach(o=>{
	//
	// 			o.products?.forEach(p => {
	//
	// 				if(tempProducts.find(f=>f.id==p.id)==undefined){
	// 					tempProducts.push(p);
	// 				}
	// 			});
	// 		});
	//
	// 		setAllDefaultProducts(tempProducts);
	//
	// 		// var allProducts = getCurrentProductsBySection();
	// 		// if(allProducts){
	// 		//   setAllDefaultProducts(allProducts);
	// 		// }
	// 	}
	//
	// }, []);
	//
	// const getCurrentProductsBySection = ()=>{
	//
	// 	if(productCategoryState.products?.length==0 && productCategoryState.subCategories?.length!=0){
	//
	// 		const selectedByCategories = productCategoryState.subCategories?.find(o=>o.isSelected);
	//
	// 		if(selectedByCategories){
	// 			return selectedByCategories.products;
	// 		}
	// 	}
	//
	// 	return productCategoryState.products;
	//
	// };
	//
	// const subCategoryclicked=(productCategory: ICategory)=>{
	//
	// 	if(productCategoryState.subCategories?.length==0 ){
	// 		return;
	// 	}
	//
	// 	if(productCategoryState.subCategories?.find(o=>o.isSelected)!.name==productCategory.name){
	// 		return;
	// 	}
	//
	// 	if(productCategoryState.subCategories){
	//
	// 		const copiedData = [...productCategoryState.subCategories];
	// 		copiedData[copiedData.indexOf(copiedData.find(o=>o.isSelected)!)].isSelected=false;
	//
	// 		copiedData[copiedData.indexOf( copiedData.find(o=>o.name==productCategory.name)!)].isSelected=true;
	//
	// 		setProductCategoryState({...productCategoryState,subCategories:copiedData});
	//
	// 		const selectedProds = copiedData.find(o=>o.isSelected)?.products;
	//
	// 		allDefaultProducts?.forEach(o=>{
	//
	// 			const currentHtmlElement = document.querySelector('.prodItem-'+o.id);
	//
	// 			currentHtmlElement?.classList.remove('show');
	//
	// 		});
	//
	// 		selectedProds?.forEach(o=>{
	// 			setTimeout(() => {
	// 				const currentHtmlElement = document.querySelector('.prodItem-'+o.id);
	// 				currentHtmlElement?.classList.add('show');
	// 			}, 600);
	// 		});
	// 	}
	//
	// };

	return (
		<div className={ 'products-section' + ' ' + typeClass }>
			<div className="container">
				<ProductHeadline
					key={ productCategory.id }
					categoryClicked={ () => console.log('s1') }
					productCategory={ productCategory }
				/>
				<ScrollContainer className="scroller d-flex flex-nowrap">
					{ productCategory.products?.map(product => (
						<ProductItem
							key={ product.id }
							productItemClicked={ productClicked }
							categoryType={ productCategory.categoryType }
							product={ product }
						/>
					)) }
					<div className="white-space"></div>
				</ScrollContainer>
			</div>
		</div>
	);

};

export default ProductsSection;
