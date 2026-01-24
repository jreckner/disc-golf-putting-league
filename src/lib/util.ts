import { FieldValues } from 'react-hook-form';

export const calculateScore = (label: String, formValues: FieldValues) => {
  return (
    (parseInt(formValues[`${label}_putt_10ft`]) || 0) +
    (parseInt(formValues[`${label}_putt_20ft`]) || 0) * 2 +
    (parseInt(formValues[`${label}_putt_30ft`]) || 0) * 3 +
    (parseInt(formValues[`${label}_putt_40ft`]) || 0) * 4
  );
};
