import React from 'react';

function HamburgerButton({
  onClick = () => console.log('hamburger clicked'),
}: {
  onClick: () => void;
}): JSX.Element {
  return (
    <button
      className='flex items-center justify-center p-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800'
      onClick={onClick}
    >
      <svg
        className={`h-6 w-6 fill-current`}
        viewBox={`0 0 24 24`}
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M4 6h16v3H4zm0 5h16v3H4z' />
      </svg>
    </button>
  );
}

export default HamburgerButton;
