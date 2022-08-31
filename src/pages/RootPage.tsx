import React from 'react';
import { useApi } from 'hooks';
import { Header, ProductsSection , SkeletonLoader, Footer} from 'components';
import { mergeClasses } from 'utils';
import { ICategory } from 'types';

function RootPage() {

	const { data: productCategories, error, isLoading } = useApi<ICategory[]>('/ka');

	console.log(productCategories, error, isLoading);
	//get products useeffect
	//within this useffect if we dont have languages  it will go out
	//whenever language state changes this will change as well
	// useEffect(() => {
	//
	// 	if(languagesState.length==0){
	// 		return;
	// 	}
	//
	// 	const currentSpace = match.params.space;
	//
	// 	setIsLoadingState(true);
	//
	// 	// `client/${match.params?.lang}/${match.params.space}`
	// 	ApiManager.getInstance().getData<ProductCategory[]>(`client/${match.params?.lang}?branchName=${match.params.space? match.params.space:''}`).then(dataResult=>{
	// 		if(dataResult){
	// 			dataResult.forEach(o=>{
	// 				if(o.subCategories && o.subCategories.length>0){
	// 					o.subCategories[0].isSelected=true;
	// 				}
	// 			});
	//
	// 			let allproductsImages:string[] = [];
	//
	// 			dataResult.forEach(o=>{
	//
	// 				if(o.products && o.products.length>0){
	// 					const imgUrls = o.products.map(p=>p.mainPhoto);
	// 					allproductsImages = allproductsImages.concat(imgUrls);
	// 				}
	//
	// 				if(o.subCategories && o.subCategories.length>0){
	//
	// 					const resultImages = o.subCategories.flatMap(fm=>fm.products).map(fmp=>fmp?.mainPhoto).filter(fmp=>fmp!=undefined);
	//
	// 					resultImages.forEach(resultImage=>{
	//
	// 						if(resultImage){
	// 							allproductsImages.push(resultImage);
	// 						}
	// 					});
	//
	// 				}
	//
	// 			});
	{/*			Promise.all(allproductsImages.map(o=>loadImage(o!)))*/
	}
	{/*				.then(o=>{*/
	}

	// 				})
	// 				.finally(()=>{
	// 					setProductCategoriesState(dataResult);
	// 					setIsLoadingState(false);
	// 					setTimeout(function() {
	//
	// 						document.getElementsByTagName('body')[0].classList.add('loaded');
	// 					}, 100);
	// 				});
	//
	// 		}
	// 	});
	//
	// }, [languagesState]);

	return (
		<React.Fragment>
			<Header/>
			{ isLoading ? (<SkeletonLoader/>) : (
				productCategories && productCategories.map(category => (
					<ProductsSection
						key={ category.id }
						productClicked={ () => console.log('click') }
						productCategory={ category }
						productTypeClass={ mergeClasses({ first: category.sortIndex === 0 }) }
					/>
				))
			) }
			<Footer/>
		</React.Fragment>
	);
}

export default RootPage;
