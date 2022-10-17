import { zodResolver } from '@hookform/resolvers/zod';
import zod from 'zod';

const DATE_OF_BIRTH_REGEX =
  /^(0[1-9]|1[0-2])\/(0[1-9]|[1-2][0-9]|[3][0-1])\/(19[0-9][0-9]|20[0-9][0-9])$/;
const PHONE_NUMBER_REGEX = /^(\+[0-9]{2}) \(([0-9]{3})\) ([0-9]{3}-[0-9]{3})$/;
const ZIP_CODE_REGEX = /^[0-9]{5}(?:-[0-9]{4})?$/;
const ADDRESS_REGEX = /^[a-zA-Z0-9 -.,/]+$/;
// phone number alt /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,3})|(\(?\d{2,3}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/;

const VALIDATIONS_MESSAGES = {
  address: 'Invalid address',
  dateOfBirth: 'Invalid date of birth. Should match MM/DD/YYYY',
  email: 'Invalid email address',
  phoneNumber: 'Invalid phone number. Should match +11 (111) 111-111',
  required: "Can't be empty",
  zipCode: 'Should match 12345 or 12345-6789',
};

export const validationsSchema = zod.object({
  name: zod.string().min(1, { message: VALIDATIONS_MESSAGES.required }),
  surname: zod.string().min(1, { message: VALIDATIONS_MESSAGES.required }),
  phoneNumber: zod
    .string()
    .min(1, { message: VALIDATIONS_MESSAGES.required })
    .regex(PHONE_NUMBER_REGEX, { message: VALIDATIONS_MESSAGES.phoneNumber }),
  email: zod
    .string()
    .min(1, { message: VALIDATIONS_MESSAGES.required })
    .email({ message: 'Invalid email address' }),
  dateOfBirth: zod
    .string()
    .min(1, { message: VALIDATIONS_MESSAGES.required })
    .regex(DATE_OF_BIRTH_REGEX, { message: VALIDATIONS_MESSAGES.dateOfBirth }),
  address: zod
    .string()
    .min(1, { message: VALIDATIONS_MESSAGES.required })
    .regex(ADDRESS_REGEX, { message: VALIDATIONS_MESSAGES.address }),
  city: zod.string().min(1, { message: VALIDATIONS_MESSAGES.required }),
  state: zod.string().min(1, { message: VALIDATIONS_MESSAGES.required }),
  zipCode: zod.string().min(1, { message: VALIDATIONS_MESSAGES.required }).regex(ZIP_CODE_REGEX, {
    message: VALIDATIONS_MESSAGES.zipCode,
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
