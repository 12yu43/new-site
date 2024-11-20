"use client"

import React from 'react'
export default function Loading() {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  return show ? <div className='bg-black/20 flex justify-center h-full w-full top-0 items-center fixed z-50'>
    <div className="loader"></div>
  </div> : null;

}
