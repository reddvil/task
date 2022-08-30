import React, { useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';
import { ProductsSection } from '../components';
import { ICategory } from 'types/Product';
import SkeletonLoader from '../components/SkeletonLoader/SkeletonLoader';

function RootPage(props: any) {

	const { data, error, isLoading } = useFetch<ICategory[]>('https://cms.meamacollect.ge/meama-collect/api/client/ka');

	console.log(data, error, isLoading);
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
		<div>
			{ isLoading ? (<SkeletonLoader/>) : (
				data && data.map(category => (
					<ProductsSection
						key={ category.id }
						productClicked={ () => console.log('click') }
						productCategory={ category }
						typeClass={ category.sortIndex === 0 ? 'first' :'' }
					/>
				))
			) }
		</div>
	);
}

export default RootPage;
