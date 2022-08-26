import { Container, Image, Text } from '@nextui-org/react';

export const NotFavorites = () => {
  return (
    <Container
      css={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'calc(100vh - 115px)'
      }}
    >
      <Text h2 transform='uppercase' size={48} css={{ textAlign: 'center' }}>No Favorites</Text>
      <Image
        src='/logo.png'
        width={150}
        height={150}
        alt='GOT logo'
        css={{ margin: '0 auto', filter: 'invert(1)' }}
      />
    </Container>
  );
};
