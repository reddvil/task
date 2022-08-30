export enum CategoryKind {
	SMALL = 'SMALL',
	MEDIUM = 'MEDIUM',
	LARGE = 'LARGE',
}

export enum DrinkKind {
	COLD = 'COLD',
	HOT = 'HOT',
	DEFAULT = 'DEFAULT'
}

export interface ISpecification {
	id: number | null;
	name: string;
	value: string;
	maxValue: string;
	sortIndex: number;
}

export interface ICapsuleProduct {
	id: number;
	name: string;
	imgUrl: string;
	bgColor: string;
	sortIndex: number;
	format: 'EUROPEAN' | 'AMERICAN';
	specifications: ISpecification[];
}

export interface IProduct {
	id: number;
	slug: string;
	name: string;
	bgColor: string;
	sortIndex: number;
	categoryId: number | null;
	mainPhoto: string;
	ogImageUrl: string | null;
	otherImages: string[];
	imgUrls: string[];
	price: number;
	type: DrinkKind;
	title: string;
	description: string;
	shortDescription: string;
	capsuleProducts: []
	specifications: ISpecification[];
}


export interface ICategory {
	id: number;
	name: string;
	parentCategoryId: number;
	subCategories: ICategory[];
	active: boolean;
	sortIndex: number;
	categoryType: CategoryKind;
	products: IProduct[] | [];
}

