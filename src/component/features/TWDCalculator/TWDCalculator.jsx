import React from 'react'
import Button from '../../ui/button'
import TWD_Option from '../../ui/TWD_Option'

function TWDCalculator() {
  return (
    <div className='inset-0 flex items-center content-center justify-center h-screen'>
        

<div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <form class="space-y-6" >
        <div className='flex justify-between space-x-3'><h5 class="text-xl font-bold text-gray-900 dark:text-blue-400 ">Total Weekly Dose</h5> <h4 class="text-xl font-medium text-gray-900 dark:text-white"> Searching</h4></div>
        <div>
            <TWD_Option/>
        </div>
        <div>
            <label for="number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Current TWD </label>
            <input type="number"  id="INRCurrent" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
        </div>
        <div>
            <label for="CurrentTWD" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Desired TWD</label>
            <input type="number"  id="CurrentTWD"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
        </div>
        <div className='flex justify-between sm:flex flex-row'>
        <Button variant='secondary'>Reset</Button>
        <Button>Calculate</Button>
        </div>
        
    </form>
</div>

    </div>
  )
}

export default TWDCalculator