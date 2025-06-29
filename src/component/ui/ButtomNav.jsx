import React from 'react'
import { NavLink } from 'react-router-dom';
import { LuFileHeart } from 'react-icons/lu';
import { BsSearchHeartFill } from 'react-icons/bs';
import { TbClockHeart } from 'react-icons/tb';
import { GiHeartInside } from 'react-icons/gi';

const IconCSS = 'w-7 h-7 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500';
const spanCSS = 'text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500';

function ButtomNav() {
  return (
    <div className="fixed bottom-0 left-0 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
        <NavLink to='/guideline' className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
          <LuFileHeart className={IconCSS} />
          <span className={spanCSS}>Guideline</span>
        </NavLink>
        <NavLink to='/' className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
          <GiHeartInside className={IconCSS}/>
          <span className={spanCSS}>INR</span>
        </NavLink>
        <NavLink to='/twd' className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
          <BsSearchHeartFill className={IconCSS}/>
          <span className={spanCSS}>TWD</span>
        </NavLink>
        <NavLink to='/' className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
          <TbClockHeart className={IconCSS} />
          <span className={spanCSS}>Follow-up</span>
        </NavLink>
      </div>
    </div>
  )
}

export default ButtomNav