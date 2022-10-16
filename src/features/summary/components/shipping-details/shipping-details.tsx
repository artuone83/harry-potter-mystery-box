import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Stack, TextField, Typography } from '@mui/material';
import React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import zod from 'zod';

import { Section } from 'layouts';

interface IFormInputs {
  name: string;
  surname: string;
  phoneNumber: string;
  email: string;
  dateOfBirth: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
}

const validationsSchema = zod.object({
  name: zod.string().min(1, { message: "Can't be empty" }),
  surname: zod.string().min(1, { message: "Can't be empty" }),
  phoneNumber: zod.string().min(1, { message: "Can't be empty" }),
  email: zod.string().min(1, { message: "Can't be empty" }),
  dateOfBirth: zod.string().min(1, { message: "Can't be empty" }),
  address: zod.string().min(1, { message: "Can't be empty" }),
  city: zod.string().min(1, { message: "Can't be empty" }),
  state: zod.string().min(1, { message: "Can't be empty" }),
  zipCode: zod.string().min(1, { message: "Can't be empty" }),
});

const useFormProps = {
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

export const ShippingDetails = () => {
  const { handleSubmit, control, reset } = useForm<IFormInputs>(useFormProps);
  // eslint-disable-next-line no-console
  const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data);

  return (
    <Section>
      <Typography component="h2">SHIPPING DETAILS</Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          <Controller
            name="name"
            control={control}
            rules={{ required: true }}
            render={({ field, formState: { errors }, fieldState: { error } }) => (
              <TextField
                label="Name"
                error={!!error}
                helperText={errors.name?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="surname"
            control={control}
            rules={{ required: true }}
            render={({ field, formState: { errors }, fieldState: { error } }) => (
              <TextField
                label="Surname"
                error={!!error}
                helperText={errors.surname?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="phoneNumber"
            control={control}
            rules={{ required: true }}
            render={({ field, formState: { errors }, fieldState: { error } }) => (
              <TextField
                label="Phone Number"
                error={!!error}
                helperText={errors.phoneNumber?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            rules={{ required: true }}
            render={({ field, formState: { errors }, fieldState: { error } }) => (
              <TextField
                label="Email"
                error={!!error}
                helperText={errors.email?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="dateOfBirth"
            control={control}
            rules={{ required: true }}
            render={({ field, formState: { errors }, fieldState: { error } }) => (
              <TextField
                label="Date of birth"
                error={!!error}
                helperText={errors.dateOfBirth?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="address"
            control={control}
            rules={{ required: true }}
            render={({ field, formState: { errors }, fieldState: { error } }) => (
              <TextField
                label="Address"
                error={!!error}
                helperText={errors.address?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="city"
            control={control}
            rules={{ required: true }}
            render={({ field, formState: { errors }, fieldState: { error } }) => (
              <TextField
                label="City"
                error={!!error}
                helperText={errors.city?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="state"
            control={control}
            rules={{ required: true }}
            render={({ field, formState: { errors }, fieldState: { error } }) => (
              <TextField
                label="State"
                error={!!error}
                helperText={errors.state?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="zipCode"
            control={control}
            rules={{ required: true }}
            render={({ field, formState: { errors }, fieldState: { error } }) => (
              <TextField
                label="Zip Code"
                error={!!error}
                helperText={errors.zipCode?.message}
                {...field}
              />
            )}
          />
          <Button variant="contained" type="submit">
            Submit
          </Button>
          <Button variant="contained" type="submit" onClick={() => reset()}>
            Reset
          </Button>
        </Stack>
      </form>
    </Section>
  );
};
