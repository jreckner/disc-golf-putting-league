import { useNavigate } from 'react-router';
import { useMutation, useQuery, useQueryClient } from 'react-query';

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
  const navigate = useNavigate();
  const { currentSelectedLeague } = useLeague();
  const queryClient = useQueryClient();
  const methods = useForm({
    shouldUnregister: false,
    defaultValues: {
      left_putt_10ft: 0,
      left_putt_20ft: 0,
      left_putt_30ft: 0,
      left_putt_40ft: 0,
      center_putt_10ft: 0,
      center_putt_20ft: 0,
      center_putt_30ft: 0,
      center_putt_40ft: 0,
      right_putt_10ft: 0,
      right_putt_20ft: 0,
      right_putt_30ft: 0,
      right_putt_40ft: 0,
      total_score: 0,
      created_at: Math.floor(Date.now() / 1000),
      league: undefined,
    },
  });

  const { data: isScoresAlreadySubmitted, isLoading } = useQuery({
    queryKey: ['results', user?.email, new Date().toISOString().slice(0, 10)],
    queryFn: async () => {
      if (!user) {
        return null;
      }
      const response = await fetch(
        `https://apis.recknerd.com/dgpl_scores?email=eq.${user.email}&event_at=eq.${new Date().toISOString().slice(0, 10)}`,
      );
      const results = await response.json();
      return results.length > 0;
    },
  });

  const formValues = methods.watch();

  const leftScore = calculateScore('Left', formValues);
  const centerScore = calculateScore('Center', formValues);
  const rightScore = calculateScore('Right', formValues);

  const totalScore = leftScore + centerScore + rightScore;

  const mutation = useMutation({
    mutationFn: async (scores) => {
      console.info('Submitted Results as JSON to API:', scores);
      const response = await fetch('https://apis.recknerd.com/dgpl_scores', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(scores),
      });
      return response.status === 201;
    },
    onSuccess: () => {
      // 3. Optional: Invalidate and refetch relevant queries on success
      queryClient.invalidateQueries({ queryKey: ['results'] });
      // alert('Post created successfully!');
      methods.reset();
    },
    onError: (error: Error) => {
      // Handle errors
      alert(`Error: ${error.message}`);
    },
  });

  const onSubmit = (data: any) => {
    data.email = user?.email;
    data.name = user?.name;
    data.total_score = totalScore;
    data.league = currentSelectedLeague;
    data.created_at = Math.floor(Date.now() / 1000);
    data.event_at = new Date().toISOString().slice(0, 10);
    console.info(JSON.stringify(data, null, 2));
    mutation.mutate(data);
  };

  // const { data: mockData, isLoading } = useQuery({
  //   queryKey: ['results'],
  //   queryFn: async () => {
  //     const response = await fetch('https://apis.recknerd.com/dgpl_scores');
  //     return response.json();
  //   },
  // });

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

  if (isLoading) {
    return (
      <DefaultLayout>
        <div className='flex items-center justify-center w-full mb-5'>
          <Progress
            aria-label='Checking If Scores Already Exist for Today'
            label='Loading...'
            color='primary'
            size='sm'
            className='w-full max-w-xs'
            isIndeterminate
          />
        </div>
      </DefaultLayout>
    );
  }

  if (isScoresAlreadySubmitted) {
    return (
      <DefaultLayout>
        <div className='flex flex-col items-center justify-center w-full mb-5 gap-5'>
          <Alert
            color='secondary'
            variant='faded'
            description='Our records show that you have already submitted scores for today. If you believe this is an error, please contact support.'
            title='Scores Already Submitted'
          />
          <Button color='primary' type='button' onPress={() => navigate('/results')}>
            View Leaderboard
          </Button>
        </div>
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
