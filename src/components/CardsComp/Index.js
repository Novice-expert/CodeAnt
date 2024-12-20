import React from 'react';
import './Index.css';
import ellipse from '../../assets/Ellipse.svg';
import database from '../../assets/database.svg';

function CardsComp({ name, access, technology, fileSize, lastUpdated }) {
  return (
    <div className='border border-[#E9EAEB] flex flex-col justify-between cardCont'>
      <div className='flex flex-row gap-3'>
        <div className='nameCard font-inter'>{name}</div>
        <div className='accessDiv border border-[#B2DDFF]'>{access}</div>
      </div>
      <div className='flex flex-row gapBottomCard'>
        <div className='flex flex-row gap-1.5'>
          <div className='bottomTxtCard'>{technology}</div>
          <div className='flex flex-col justify-center'>
            <img src={ellipse} alt="Ellipse" />
          </div>
        </div>
        <div className='flex flex-row gap-2'>
          <div className='flex flex-col justify-center'>
            <img src={database} alt="Database" />
          </div>
          <div className='bottomTxtCard'>{fileSize}</div>
        </div>
        <div className='flex flex-row gap-2'>
          <div className='bottomTxtCard'>{lastUpdated}</div>
        </div>
      </div>
    </div>
  );
}

export default CardsComp;
