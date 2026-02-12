import { Link, Navbar as HeroUINavbar, NavbarBrand, NavbarContent } from '@heroui/react';

import GoogleLoginProfile from '@/components/GoogleLoginProfile';

export function Navbar() {
  return (
    <HeroUINavbar className='h-24 md:h-32 bg-black-900' maxWidth='xl' position='sticky'>
      <NavbarBrand as={Link} href='/' className='cursor-pointer'>
        <img
          className='h-16 md:h-24 lg:h-32 w-auto'
          src='/Bomb-Discs_Logo_White-Letters.png'
          alt=''
        />
      </NavbarBrand>
      <NavbarContent justify='end'>
        <GoogleLoginProfile />
      </NavbarContent>
    </HeroUINavbar>
  );
}
