import { FC, useEffect, useState } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';

import { Button, Card, Col, Grid, Text } from '@nextui-org/react';

import confetti from 'canvas-confetti';

import { Layout } from '../../components/layouts';
import { GOTListReponse } from '../../interfaces';
import { localFavorites } from '../../utils';
import { gotApi } from '../../api';

interface Props {
  character: GOTListReponse;
}

const CharacterPage: FC<Props> = ({ character }) => {
  const [isInFavorites, setIsInFavorites] = useState(false);
  const { fullName } = character;

  const onToggleFavorites = () => {
    localFavorites.localFavorite(character.id);
    setIsInFavorites(!isInFavorites);

    if (isInFavorites) return;

    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        y: 0,
        x: 1
      },
    });
  }

  useEffect(() => {
    setIsInFavorites(localFavorites.existInFavorites(character.id));
  }, [character.id]);


  return (
    <Layout title={fullName}>
      <Card css={{ borderRadius: '8px', padding: '10px 15px', maxWidth: '992px', margin: '0 auto' }} variant='flat'>
        <Grid.Container gap={2} justify='center'>
          <Grid xs={12} lg={3}>
            <Card.Image
              src={character.imageUrl}
              width='100%'
              objectFit='cover'
              alt={`${fullName} image`}
              css={{ borderRadius: '4px' }}
            />
          </Grid>
          <Grid xs={12} lg={9} direction='column'>
            <Col css={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text color='#c7c7c7' h1>{fullName}</Text>
              <Button
                color='gradient'
                ghost={!isInFavorites}
                onClick={onToggleFavorites}
              > {isInFavorites ? 'Remove from favorites' : 'Mark as favorite'} </Button>
            </Col>
            <Text h3 size={32} color='#c7c7c7'>{character.family}</Text>
            <Text color='#c7c7c7' size={20} css={{ display: 'flex', alignItems: 'center', gap: '20px' }}>Title: {character.title}</Text>
          </Grid>
        </Grid.Container>
      </Card>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const characters = [...Array(53)].map((_, index) => `${index}`);

  return {
    paths: characters.map(id => ({
      params: { id }
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const { id } = params as { id: string };
  const { data } = await gotApi.get<GOTListReponse>(`/Characters/${id}`);

  return {
    props: {
      character: data
    },
  }
}

export default CharacterPage;