import React from 'react';

function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col h-screen bg-black py-2'>
      <main className='container mx-auto max-w-7xl px-6 flex-grow pt-4 sm:pt-8'>{children}</main>
    </div>
  );
}

export default DefaultLayout;
