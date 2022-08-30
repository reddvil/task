export interface IContactInfo {
	name: string;
	value: string;
	socialLinks: ISocialLinks[];
}

export interface ISocialLinks {
	imageUrl: string;
	ogImageUrl: string;
	link: string;
}
