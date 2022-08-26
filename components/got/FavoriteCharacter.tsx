import { FC } from 'react';
import { useRouter } from 'next/router';

import { Card, Grid } from '@nextui-org/react';

interface Props {
  id: number;
};

export const FavoriteCharacter: FC<Props> = ({ id }) => {
  const router = useRouter();

  const onFavoriteClicked = () => {
    router.push(`/character/${id}`);
  }

  return (
    <Grid
      xs={12}
      sm={6}
      md={3}
      lg={2}
      onClick={onFavoriteClicked}
    >
      <Card isHoverable isPressable>
        <Card.Image
          src={`/characters/${id}.jpg`}
          width='100%'
          height='220px'
          objectFit='cover'
        />
      </Card>
    </Grid>
  )
};