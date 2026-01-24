import React from 'react';

import { Navbar } from '@/components/Navbar';

function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='"min-h-screen flex flex-col bg-background'>
      <header>
        <Navbar />
      </header>
      <main className='container mx-auto max-w-7xl px-6 flex-grow pt-4 sm:pt-8 mb-20'>{children}</main>
      {/*<div className='fixed inset-x-0 bottom-0'>*/}
      {/*  <footer className='flex bg-gray-100 text-secondary justify-center w-full p-4'>*/}
      {/*    <p>&copy; 2026 Recknerd</p>*/}
      {/*  </footer>*/}
      {/*</div>*/}
    </div>
  );
}

export default DefaultLayout;
