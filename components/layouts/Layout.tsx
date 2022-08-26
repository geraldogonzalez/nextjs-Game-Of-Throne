import Head from 'next/head';
import { FC } from 'react';

import { Navbar } from '../ui';

interface Props {
  children?: React.ReactNode,
  title?: string,
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{`${title} - Game Of Thrones`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="Geraldo González" />
        <meta name="keywords" content={`${title}, Game Of Thrones, GOT`} />
        <meta property="og:title" content={`Information about ${title}`} />
        <meta property="og:description" content={`This page is showing information about the Game Of Thrones character ${title}`} />
        <meta property="og:image" content={`${origin}/banner.jpg`} />
      </Head>

      {<Navbar />}

      <main
        style={{
          padding: '20px',
        }}
      >
        {children}
      </main>
    </>
  );
};
