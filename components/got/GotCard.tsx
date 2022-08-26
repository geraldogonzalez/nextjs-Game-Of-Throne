import { FC } from 'react';
import { useRouter } from 'next/router';

import { Button, Card, Col, Grid, Row, Text } from '@nextui-org/react';
import { GOTListReponse } from '../../interfaces';

interface Props {
  character: GOTListReponse;
}

export const GotCard: FC<Props> = ({ character }) => {

  const { fullName, title, imageUrl, family } = character;
  const router = useRouter();

  const onClick = () => {
    router.push(`/name/${fullName}`);
  }

  return (
    <Grid
      xs={12}
      sm={5}
      md={3}
      xl={2}
    >
      <Card isHoverable isPressable css={{ w: "100%", h: "400px" }}>
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
          <Col css={{ background: 'rgba(0,0,0,.75)', width: 'auto', padding: '10px 15px', borderRadius: '8px' }}>
            <Text h2 color="white">
              {fullName}
            </Text>
            <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA" h3>
              {title}
            </Text>
          </Col>
        </Card.Header>
        <Card.Body css={{ p: 0 }}>
          <Card.Image
            src={imageUrl}
            width="100%"
            height="100%"
            objectFit="cover"
            alt={`${fullName} image`}
          />
        </Card.Body>
        <Card.Footer
          isBlurred
          css={{
            position: "absolute",
            bgBlur: "rgba(0,0,0,.75)",
            borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
            bottom: 0,
            zIndex: 1,
          }}
        >
          <Row align='center'>
            <Col>
              <Text color="#ffffffAA" size={20}>
                {family}'s house
              </Text>
            </Col>
            <Col>
              <Row justify="flex-end">
                <Button
                  flat
                  auto
                  rounded
                  css={{ background: '#333333' }}
                  onPress={onClick}
                >
                  <Text
                    css={{ color: "white" }}
                    size={12}
                    weight="bold"
                    transform="uppercase"
                  >
                    Show more
                  </Text>
                </Button>
              </Row>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};