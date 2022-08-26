import type { GetStaticProps, NextPage } from 'next';
import { Grid } from '@nextui-org/react';

import { gotApi } from '../api';
import { GOTListReponse } from '../interfaces';
import { Layout } from '../components/layouts';
import { GotCard } from '../components/got';

interface Props {
  characters: GOTListReponse[];
}

const HomePage: NextPage<Props> = ({ characters }) => {
  return (
    <Layout title="Game Of Thrones Character's List">
      <Grid.Container gap={5} justify='flex-start'>
        {characters.map((character) => (
          <GotCard
            key={character.id}
            character={character}
          />
        ))}
      </Grid.Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {

  const { data } = await gotApi.get<GOTListReponse>('/Characters');

  return {
    props: {
      characters: data
    },
  }
}

export default HomePage
