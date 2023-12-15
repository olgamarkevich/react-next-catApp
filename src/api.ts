import type { Cat, CatsQuery, Breed } from './model';

export const fetchCats = async (query: CatsQuery) => {
  const searchParams = new URLSearchParams({
    api_key:
      'live_tcu65LRpAv2jyiKNRocNSQFkY95k0LRIJxoMSOzY1R5gWgPYGODKXGduvvAOHmqu',
    limit: '9',
    has_breeds: '1',
    ...query,
  });
  console.log(
    'https://api.thecatapi.com/v1/images/search?' + searchParams.toString()
  );
  try {
    const res = await fetch(
      'https://api.thecatapi.com/v1/images/search?' + searchParams.toString()
    );

    if (res.ok) {
      return (await res.json()) as Cat[];
    }
  } catch (err) {
    console.log(err);
  }

  return [];
};

export const fetchBreeds = async () => {
  const searchParams = new URLSearchParams({
    api_key:
      'live_tcu65LRpAv2jyiKNRocNSQFkY95k0LRIJxoMSOzY1R5gWgPYGODKXGduvvAOHmqu',
    limit: '13',
  });

  try {
    const res = await fetch(
      'https://api.thecatapi.com/v1/breeds?' + searchParams.toString()
    );

    if (res.ok) {
      return (await res.json()) as Breed[];
    }
  } catch (err) {
    console.log(err);
  }

  return [];
};
