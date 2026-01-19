import DefaultLayout from '@/layouts/default';

function HomePage() {
  return (
    <DefaultLayout>
      <div className='flex flex-row gap-6 bg-black text-6xl font-extrabold text-primary items-center justify-center h-full'>React Starter App</div>
    </DefaultLayout>
  );
}

export default HomePage;
