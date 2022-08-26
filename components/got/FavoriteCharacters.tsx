import { FC } from 'react';

import { Grid } from '@nextui-org/react';
import { FavoriteCharacter } from './';

interface Props {
  favorites: number[];
}

export const FavoriteCharacters: FC<Props> = ({favorites}) => {
  return (
    <Grid.Container gap={5} justify='flex-start' direction='row'>
      {favorites.map(id => (
        <FavoriteCharacter
          key={id}
          id={id}
        />
      ))}
    </Grid.Container>
  );
};
