'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import AuthModalInput, { Inputs } from './AuthModalInput';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

interface Props {
  type: 'signin' | 'signup';
}

const text = (type: Props['type'], signinText: string, signupText: string) =>
  type === 'signin' ? signinText : signupText;
export default function AuthModal({ type }: Props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [inputs, setInputs] = React.useState<Inputs>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    password: '',
  });
  const onInputsChange = React.useCallback((newInputs: Partial<Inputs>) => {
    setInputs((prev) => ({ ...prev, ...newInputs }));
  }, []);
  return (
    <div>
      <button
        className={`border p-1 px-4 rounded ${
          type === 'signin' ? 'bg-blue-400 text-white mr-3' : ''
        }`}
        onClick={handleOpen}
      >
        {text(type, 'Sign in', 'Sign up')}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <div className='p-2 h-[500px]'>
            <div className='uppercase font-bold text-center pb-2 border-b mb-2'>
              <p className='text-sm'>
                {text(type, 'Sign in', 'Create account')}
              </p>
            </div>
            <div className='m-auto'>
              <h2 className='text-2xl font-light text-center'>
                {text(
                  type,
                  'Loginin to You Account',
                  'Create Your Open Table Account',
                )}
              </h2>
              <AuthModalInput
                inputs={inputs}
                onInputChange={onInputsChange}
                type={type}
              />
              <button className='uppercase bg-red-600 w-full text-white p-3 rounded text-sm mb-5 disabled:bg-gray-400'>
                {text(type, 'Sign in', 'Create Account')}
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
