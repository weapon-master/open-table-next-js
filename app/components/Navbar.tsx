'use client';

import AuthModal from './AuthModal';

export default function Navbar() {
  return (
    <nav className='bg-white p-2 flex justify-between'>
      <a href='/' className='font-bold text-gray-700 text-2xl'>
        OpenTable
      </a>
      <div>
        <div className='flex'>
          <AuthModal type='signin' />
          <AuthModal type='signup' />
        </div>
      </div>
    </nav>
  );
}
