export interface Contact {
	picture: { thumbnail: string; large: string };
	name: { first: string; last: string };
	email: string;
	cell: string;
	location: { city: string; state: string; country: string };
	login?: { uuid: string };
}
