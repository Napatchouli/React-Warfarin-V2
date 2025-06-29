import React from 'react'
import Button from '../../ui/button'

function INRCalculator_2() {
  return (
    <div className='inset-0 flex items-center content-center justify-center h-screen'>
        

<div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <form class="space-y-6" >
        <div className='flex justify-between'><h5 class="text-xl font-medium text-gray-900 dark:text-blue-400">INR Calculator</h5> <h4 class="text-xl font-medium text-gray-900 dark:text-white">Target 2.5-3.5</h4></div>
        <div>
            <label for="number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Current INR </label>
            <input type="number"  id="INRCurrent_2" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
        </div>
        <div>
            <label for="CurrentTWD" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Current Total Warfarin per Week (mg/day)</label>
            <input type="number"  id="CurrentTWD_2"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
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

export default INRCalculator_2