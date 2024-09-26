import Footer from '@/app/_components/Footer';
import React from 'react'
import CategoryList from './_components/CategoryList';

const layout = ({children}) => {
  return (
    <div className="grid grid-cols-4 ">
        <div className='hidden md:block'>
        <CategoryList/>
        </div>
        <div className="col-span-4 md:col-span-3 min-h-screen">
         
        {children}
        </div>
       
    </div>
  );
}

export default layout;
