import React from 'react'
import { useLocation } from 'react-router-dom';

function NoPage() {
  const location = useLocation();
  console.log(location);
  console.log( window.location.href);
  return (
    <div className='flex h-screen w-screen font-extrabold justify-center items-center text-5xl'>
         En cours de realisation ...
    </div>
  )
}

export default NoPage