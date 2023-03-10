import { User } from '@prisma/client';
import React from 'react';

export type Inputs = Pick<
  User,
  'firstName' | 'lastName' | 'email' | 'phone' | 'city' | 'password'
>;

interface Props {
  inputs: Inputs;
  onInputChange: (newInputs: Partial<Inputs>) => void;
  type: 'signin' | 'signup';
}

export default function AuthModalInput({ inputs, onInputChange, type }: Props) {
  return (
    <div>
      <div className='my-3 flex flex-wrap justify-between text-sm'>
        {
          // Only show first name and last name input if type is signup
          type === 'signup' && (
            <>
              <input
                type='text'
                className='border rounded p-2 py-3 w-[49%] mb-2'
                placeholder='First Name'
                value={inputs.firstName}
                onChange={(e) => onInputChange({ firstName: e.target.value })}
              />
              <input
                type='text'
                className='border rounded p-2 py-3 w-[49%] mb-2'
                placeholder='Last Name'
                value={inputs.lastName}
                onChange={(e) => onInputChange({ lastName: e.target.value })}
              />
            </>
          )
        }
        <input
          type='email'
          className='border rounded p-2 py-3 w-full mb-2'
          placeholder='Email'
          value={inputs.email}
          onChange={(e) => onInputChange({ email: e.target.value })}
        />
        {
          // Only show phone / city input if type is signup
          type === 'signup' && (
            <>
              <input
                type='number'
                className='border rounded p-2 py-3 w-[49%] mb-2'
                placeholder='Phone'
                value={inputs.phone}
                onChange={(e) => onInputChange({ phone: e.target.value })}
              />
              <input
                type='text'
                className='border rounded p-2 py-3 w-[49%] mb-2'
                placeholder='City'
                value={inputs.city}
                onChange={(e) => onInputChange({ city: e.target.value })}
              />
            </>
          )
        }
        <input
          type='password'
          className='border rounded p-2 py-3 w-full mb-2'
          placeholder='Password'
          value={inputs.password}
          onChange={(e) => onInputChange({ password: e.target.value })}
        />
      </div>
    </div>
  );
}
