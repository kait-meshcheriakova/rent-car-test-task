import { FavoriteCarsList } from '../components/FavoriteCarsList/FavoriteCarsList';
import { Filter } from 'components/Filters/Filter';
const FavoritePage = () => {
  return (
    <>
      <Filter />
      <FavoriteCarsList />
    </>
  );
};
export default FavoritePage;
