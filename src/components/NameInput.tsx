import { Input } from '@heroui/react';

function NameInput() {
  return (
    <Input
      classNames={{
        label: 'text-secondary/75',
      }}
      type='text'
      label='Your Name'
      placeholder='Enter your name'
      labelPlacement='outside-top'
    />
  );
}

export default NameInput;
