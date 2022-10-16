import { zodResolver } from '@hookform/resolvers/zod';
import zod from 'zod';

const dateOfBirthRegex =
  /^(0[1-9]|1[0-2])\/(0[1-9]|[1-2][0-9]|[3][0-1])\/(19[0-9][0-9]|20[0-9][0-9])$/;
const phoneNumberRegex = /^(\+[0-9]{2}) \(([0-9]{3})\) ([0-9]{3}-[0-9]{3})$/;
const zipCodeRegex = /^[0-9]{5}(?:-[0-9]{4})?$/;
const addressRegex = /^[a-zA-Z0-9 -.,/]+$/;
// phone number alt /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,3})|(\(?\d{2,3}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/;

const validationsMessages = {
  required: "Can't be empty",
  phoneNumber: 'Invalid phone number. Should match +11 (111) 111-111',
  email: 'Invalid email address',
  zipCode: 'Should match 12345 or 12345-6789',
};

export const validationsSchema = zod.object({
  name: zod.string().min(1, { message: validationsMessages.required }),
  surname: zod.string().min(1, { message: validationsMessages.required }),
  phoneNumber: zod
    .string()
    .min(1, { message: validationsMessages.required })
    .regex(phoneNumberRegex, { message: validationsMessages.phoneNumber }),
  email: zod
    .string()
    .min(1, { message: validationsMessages.required })
    .email({ message: 'Invalid email address' }),
  dateOfBirth: zod
    .string()
    .min(1, { message: validationsMessages.required })
    .regex(dateOfBirthRegex, { message: 'Invalid date of birth' }),
  address: zod
    .string()
    .min(1, { message: validationsMessages.required })
    .regex(addressRegex, { message: 'Invalid Address' }),
  city: zod.string().min(1, { message: validationsMessages.required }),
  state: zod.string().min(1, { message: validationsMessages.required }),
  zipCode: zod.string().min(1, { message: validationsMessages.required }).regex(zipCodeRegex, {
    message: validationsMessages.zipCode,
  }),
  // can differ between countries,
  // detect with Navigator.language,
  // add extra library to check validity,
  // https://github.com/sarcadass/i18n-zipcodes
});

export const useFormProps = {
  defaultValues: {
    name: '',
    surname: '',
    phoneNumber: '',
    email: '',
    dateOfBirth: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
  },
  resolver: zodResolver(validationsSchema),
};
