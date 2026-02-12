import { Select, SelectItem } from '@heroui/react';

import { useLeague } from '@/context/LeagueContext';

export const leagues = [
  { key: 'open', label: 'Open' },
  { key: 'adv', label: 'Advanced' },
  { key: 'women', label: 'Woman' },
  { key: 'rec', label: 'Recreational' },
  { key: 'protected', label: ' (40+) Age Protected' },
  { key: 'junior', label: 'Juniors' },
];

function LeagueSelector() {
  const { currentSelectedLeague, setCurrentSelectedLeague } = useLeague();
  console.info('lastSelectedLeague', currentSelectedLeague);

  return (
    <Select
      className='max-w-xs'
      classNames={{
        label: 'text-secondary/75 font-bold',
      }}
      size='sm'
      placeholder='Select League'
      defaultSelectedKeys={currentSelectedLeague ? [`${currentSelectedLeague}`] : []}
      onSelectionChange={(selection) => {
        setCurrentSelectedLeague(selection.currentKey as string);
      }}
    >
      {leagues.map((league) => (
        <SelectItem key={league.key}>{league.label}</SelectItem>
      ))}
    </Select>
  );
}

export default LeagueSelector;
