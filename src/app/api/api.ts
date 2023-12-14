export const getData = async (limitValue: number) => {
  const url = 'https://api.thecatapi.com/v1';
  const limit = limitValue;
  const API_KEY =
    'live_tcu65LRpAv2jyiKNRocNSQFkY95k0LRIJxoMSOzY1R5gWgPYGODKXGduvvAOHmqu';

  const res = await fetch(
    `${url}/images/search?limit=${limit}&api_key=${API_KEY}&page=4&order='asc'`
  );
  const cats = await res.json();

  return cats;
};
