import { Controller, useFormContext } from 'react-hook-form';

import { Card, Slider } from '@heroui/react';

function PuttTracker({ basket, distance }: { basket: String; distance: String }) {
  const { control } = useFormContext();

  return (
    <Card className='bg-background/20 text-secondary/80 p-3 w-full'>
      <Controller
        name={`${basket.toLowerCase()}_putt_${distance}`}
        control={control}
        render={({ field }) => (
          <Slider
            value={field.value}
            onChange={field.onChange}
            classNames={{
              label: 'text-secondary/90',
            }}
            getValue={(putts) => `${putts} of 4 Putts`}
            label={`from ${distance}`}
            showSteps
            maxValue={4}
            minValue={0}
            size='md'
            marks={[
              {
                value: 0,
                label: '0',
              },
              {
                value: 1,
                label: '1',
              },
              {
                value: 2,
                label: '2',
              },
              {
                value: 3,
                label: '3',
              },
              {
                value: 4,
                label: '4',
              },
            ]}
            renderThumb={(props) => (
              <div
                {...props}
                className='group p-1 top-1/2 bg-background border-small border-default-200 dark:border-default-400/50 shadow-medium rounded-full cursor-grab data-[dragging=true]:cursor-grabbing'
              >
                <span className='transition-transform bg-linear-to-br shadow-small from-secondary-100 to-secondary-500 rounded-full w-5 h-5 block group-data-[dragging=true]:scale-80' />
              </div>
            )}
          />
        )}
      />
    </Card>
  );
}

export default PuttTracker;
