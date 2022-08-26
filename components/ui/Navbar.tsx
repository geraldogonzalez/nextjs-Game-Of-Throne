import { Link, Text, useTheme } from "@nextui-org/react";
import NextLink from "next/link";
import Image from "next/image";

export const Navbar = () => {
  const { theme } = useTheme();
  return (
    <nav
      style={{
        alignItems: 'center',
        backgroundColor: theme?.colors.white.value,
        display: 'flex',
        flexDirection: 'row',
        height: '75px',
        justifyContent: 'space-between',
        padding: '0 20px',
        width: '100%'
      }}
    >
      <div>
        <NextLink href='/' passHref>
          <Link css={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Image
              alt="Game Of Thrones icon"
              height={50}
              width={50}
              src="/logo.png"
            />
            <Text color="black" h2 margin="0 2.5px 0 0">G</Text>
            <Text color="black" h4>ame Of Thrones</Text>
          </Link>
        </NextLink>
      </div>

      <NextLink href='/favorites' passHref>
        <Link>
          <Text color="black">Favorites</Text>
        </Link>
      </NextLink>
    </nav>
  );
};
