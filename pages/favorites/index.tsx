import { useEffect, useState } from 'react';

import { NotFavorites } from '../../components/ui';
import { Layout } from '../../components/layouts';
import { localFavorites } from '../../utils';
import { FavoriteCharacters } from '../../components/got';

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    setFavorites(localFavorites.favorites());
  }, []);

  return (
    <Layout title='Favorites'>
      {
        !favorites.length
          ?
          <NotFavorites />
          :
          <FavoriteCharacters favorites={favorites} />
      }

    </Layout>
  );
};

export default FavoritesPage