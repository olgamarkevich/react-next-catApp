export const getData = async (limitValue: number, sort: string) => {
  const url = 'https://api.thecatapi.com/v1';
  const limit = limitValue;
  const API_KEY =
    'live_tcu65LRpAv2jyiKNRocNSQFkY95k0LRIJxoMSOzY1R5gWgPYGODKXGduvvAOHmqu';

  const res = await fetch(
    `${url}/images/search?limit=${limit}&breed_ids=beng&api_key=${API_KEY}&page=1&order=${sort}`
  );
  const cats = await res.json();

  return cats;
};
