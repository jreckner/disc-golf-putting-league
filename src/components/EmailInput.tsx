import { Input } from '@heroui/react';

function EmailInput() {
  return (
    <Input
      classNames={{
        label: 'text-secondary/75',
      }}
      type='email'
      label='Email Address'
      labelPlacement='outside-top'
      placeholder='Enter your email'
    />
  );
}

export default EmailInput;
