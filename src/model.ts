export interface CatsQuery {
  page: string;
  order: 'asc' | 'desc' | 'rand';
  breed_ids: string;
}

export interface Cat {
  id: string;
  width: number;
  height: number;
  url: string;
  breeds: Breed[];
}

export interface Breed {
  id: string;
  name: string;
}
