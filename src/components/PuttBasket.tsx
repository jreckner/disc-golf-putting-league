import PuttTracker from '@/components/PuttTracker';

function PuttBasket({ label }: { label: String }) {
  return (
    <div className='flex flex-col justify-center items-center gap-2 w-full'>
      <PuttTracker basket={label} distance='10ft' />
      <PuttTracker basket={label} distance='20ft' />
      <PuttTracker basket={label} distance='30ft' />
      <PuttTracker basket={label} distance='40ft' />
    </div>
  );
}

export default PuttBasket;
