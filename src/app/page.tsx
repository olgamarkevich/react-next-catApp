import type { CatsQuery } from '@/model';
import { fetchBreeds, fetchCats } from '@/api';
import App from '@/components/App';

export default async function Home({
  searchParams,
}: {
  searchParams: CatsQuery;
}) {
  const catsFetch = fetchCats(searchParams);
  const breedsFetch = fetchBreeds();

  const [cats, breeds] = await Promise.all([catsFetch, breedsFetch]);
  return <App cats={cats} breeds={breeds} />;
}
