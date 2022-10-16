import { Box, Stack, TextField, Typography, styled } from '@mui/material';
import React from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';

import { useFormProps } from './consts';
import { Loading } from 'components';
import { useSummaryParams } from 'features/summary/hooks';
import { useMinifigDetailsQuery, useMinifigPartsQuery } from 'hooks';
import { Section } from 'layouts';

import { PartsSummary } from '../parts-summary';

export interface IFormInputs {
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

export const ShippingDetails = () => {
  const { set_num } = useSummaryParams();
  const { data: details, isLoading: areDetailsLoading } = useMinifigDetailsQuery(set_num as string);
  const { data: parts, isLoading: arePartsLoading } = useMinifigPartsQuery(set_num as string);
  const methods = useForm<IFormInputs>(useFormProps);
  const { control } = methods;

  const allDataLoaded = parts && details;

  if (areDetailsLoading || arePartsLoading) {
    return <Loading />;
  }

  if (!allDataLoaded) {
    return null;
  }

  return (
    <FormProvider {...methods}>
      <Stack direction="row" spacing={3}>
        <Box flex={3} alignSelf="center">
          <Section>
            <Typography component="h2" variant="h5" textAlign="left" mb={4}>
              Shipping details
            </Typography>

            <form>
              <Stack spacing={3}>
                <Stack direction="row" spacing={3}>
                  <Controller
                    name="name"
                    control={control}
                    rules={{ required: true }}
                    render={({ field, formState: { errors }, fieldState: { error } }) => (
                      <TextField
                        sx={{ width: '100%' }}
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
                        sx={{ width: '100%' }}
                        label="Surname"
                        error={!!error}
                        helperText={errors.surname?.message}
                        {...field}
                      />
                    )}
                  />
                </Stack>
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
                <Stack direction="row" spacing={3}>
                  <Controller
                    name="state"
                    control={control}
                    rules={{ required: true }}
                    render={({ field, formState: { errors }, fieldState: { error } }) => (
                      <TextField
                        sx={{ width: '100%' }}
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
                        sx={{ width: '100%' }}
                        label="Zip Code"
                        error={!!error}
                        helperText={errors.zipCode?.message}
                        {...field}
                      />
                    )}
                  />
                </Stack>
              </Stack>
            </form>
          </Section>
        </Box>
        <Box width="30%">
          <PartsSummary details={details} parts={parts} />
        </Box>
      </Stack>
    </FormProvider>
  );
};
