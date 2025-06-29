import React from 'react'
import { MdBloodtype } from 'react-icons/md'; 
import { PiPillFill } from 'react-icons/pi';
import { BsChatHeartFill } from 'react-icons/bs';
const IconCSS = 'w-7 h-7 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500';

function INRResult_Card() {
    return (
        <div className='inset-0 flex items-center content-center justify-center h-screen'>


            <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 dark:bg-gray-800 dark:border-gray-700">
                <h5 class="mb-3 text-xl text-center font-semibold text-gray-900 md:text-xl dark:text-white">
                    Result
                </h5>
                <p class="text-sm text-center font-normal text-gray-500 dark:text-gray-400">โปรดใช้แอปด้วยความ Awareness</p>
                <ul class="my-4 space-y-3">
                   
                    <li>
                        <a  class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                            <MdBloodtype class={IconCSS}/>
                            <span class="flex-1 ms-3 whitespace-nowrap">Interpretion :</span>
                        </a>
                    </li>
                    <li>
                        <a  class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                            <PiPillFill class={IconCSS}/>
                            <span class="flex-1 ms-3 whitespace-nowrap">Current TWD (mg/wk) :</span>
                        </a>
                    </li>
                    <li>
                        <a class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                            <BsChatHeartFill class={IconCSS}/>
                            <span class="flex-1 ms-3 whitespace-nowrap">Suggestion :</span>
                        </a>
                    </li>
                    
                </ul>
                
            </div>

        </div>
    )
}

export default INRResult_Card