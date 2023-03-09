'use client';

import LoginModal from './LoginModal';

export default function Navbar() {
  return (
    <nav className='bg-white p-2 flex justify-between'>
      <a href='/' className='font-bold text-gray-700 text-2xl'>
        OpenTable
      </a>
      <div>
        <div className='flex'>
          <LoginModal type='signin' />
          <LoginModal type='signup' />
        </div>
      </div>
    </nav>
  );
}
