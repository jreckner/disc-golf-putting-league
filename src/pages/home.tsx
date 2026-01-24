import { FormProvider, useForm } from 'react-hook-form';

import { GiDiscGolfBasket, GiLaurelsTrophy } from 'react-icons/gi';

import { Accordion, AccordionItem, Alert, Button, Progress } from '@heroui/react';

import PuttBasket from '@/components/PuttBasket';
import { useAuth } from '@/context/AuthProvider';
import { useLeague } from '@/context/LeagueContext';
import DefaultLayout from '@/layouts/default';
import { calculateScore } from '@/lib/util';

function AccordionTitle({ label, score }: { label: string; score: number }) {
  return (
    <div className='flex items-center gap-1'>
      <GiDiscGolfBasket size='36' color='secondary' />
      <div className='flex justify-between items-center w-full'>
        <span className='text-2xl text-secondary p-2'>{label}</span>
        {score > 0 && (
          <div className='flex gap-1 items-center'>
            {score === 40 && <GiLaurelsTrophy size={32} style={{ color: 'gold' }} />}
            <span className='text-sm text-primary p-2'>{score}pts</span>
          </div>
        )}
      </div>
    </div>
  );
}

function HomePage() {
  const { user } = useAuth();
  const { currentSelectedLeague } = useLeague();
  const methods = useForm({
    shouldUnregister: false,
    defaultValues: {
      Left_putt_10ft: 0,
      Left_putt_20ft: 0,
      Left_putt_30ft: 0,
      Left_putt_40ft: 0,
      Center_putt_10ft: 0,
      Center_putt_20ft: 0,
      Center_putt_30ft: 0,
      Center_putt_40ft: 0,
      Right_putt_10ft: 0,
      Right_putt_20ft: 0,
      Right_putt_30ft: 0,
      Right_putt_40ft: 0,
      totalScore: 0,
    },
  });

  const formValues = methods.watch();

  const leftScore = calculateScore('Left', formValues);
  const centerScore = calculateScore('Center', formValues);
  const rightScore = calculateScore('Right', formValues);

  const totalScore = leftScore + centerScore + rightScore;

  const onSubmit = (data: any) => {
    data.email = user?.email;
    data.name = user?.name;
    data.totalScore = totalScore;
    const resultsAsJSON = JSON.stringify(data, null, 2);
    console.info('Submitted Results as JSON to API:', resultsAsJSON);
    // CALL out to API to submit results
  };

  if (!user) {
    return (
      <DefaultLayout>
        <Alert
          color='secondary'
          variant='faded'
          description='You must login before you can start your round.'
          title='Login to Start'
        />
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout>
      {currentSelectedLeague === null && (
        <div className='flex items-center justify-center w-full mb-5'>
          <Alert
            color='secondary'
            variant='faded'
            description='You must select a league before you can start your round.'
            title='Select League to Start'
          />
        </div>
      )}
      <div className='flex flex-col items-center gap-4'>
        <FormProvider {...methods}>
          <form
            className='flex flex-col gap-6 text-tertiary font-medium bg-background items-center justify-center h-full w-full'
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <Accordion
              variant='splitted'
              defaultExpandedKeys={['left']}
              isDisabled={currentSelectedLeague === null}
            >
              <AccordionItem
                key='left'
                aria-label='Left Basket'
                title={<AccordionTitle label='Left' score={leftScore} />}
              >
                <PuttBasket label='Left' />
              </AccordionItem>
              <AccordionItem
                key='center'
                aria-label='Center Basket'
                title={<AccordionTitle label='Center' score={centerScore} />}
              >
                <PuttBasket label='Center' />
              </AccordionItem>
              <AccordionItem
                key='right'
                aria-label='Right Basket'
                title={<AccordionTitle label='Right' score={rightScore} />}
              >
                <PuttBasket label='Right' />
              </AccordionItem>
            </Accordion>
            <Progress
              aria-label='Putting League Total Score'
              label='Total Score'
              className='max-w-md'
              color='primary'
              size='sm'
              maxValue={120}
              value={totalScore}
              valueLabel={`${totalScore} / 120pts`}
              formatOptions={{}}
              classNames={{
                labelWrapper: 'justify-between',
                value: 'text-right',
              }}
              showValueLabel
            />
            <div className='flex gap-4'>
              <Button
                color='primary'
                type='submit'
                isDisabled={currentSelectedLeague === null || totalScore === 0}
              >
                Submit
              </Button>
              <Button
                color='default'
                type='button'
                isDisabled={currentSelectedLeague === null}
                onPress={() => methods.reset()}
              >
                Reset All
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </DefaultLayout>
  );
}

export default HomePage;
