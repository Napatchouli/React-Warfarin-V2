import React from 'react'
const trCSS = "bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600";
const thCSS = "px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white";

function Guideline_2() {
  return (
        <div className='inset-0 flex items-center justify-center min-h-screen'>
       <div class="relative overflow-x-auto overflow-y-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Day therapy
                </th>
                <th scope="col" class="px-6 py-3">
                    INR
                </th>
                <th scope="col" class="px-6 py-3">
                    Management
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class={trCSS}>
                <th scope="row" class={thCSS}>
                   Day 1
                </th>
                <td class="px-6 py-4">
                    -
                </td>
                <td class="px-6 py-4">
                    <ul>
                      <li>1. Age {'>'} 70 years : Warfarin 2 mg/d </li>
                      <li>2. BW {'>'}70 kg : Warfarin 3 mg/d</li>
                      <li>3. BW {'<'}40 kg : Warfarin 2 mg/d</li>
                      <li>4. Other BW : Warfarin 2.5 mg/d</li>
                    </ul>
                </td>
            </tr>
            <tr class={trCSS}>
                <th scope="row" class={thCSS}>
                   Day 2-3
                </th>
                <td class="px-6 py-4">
                    {'<'} 1.5
                </td>
                <td class="px-6 py-4">
                    No Change
                </td>
            </tr>
            <tr class={trCSS}>
                 <th scope="row" class={thCSS}>
                   Day 2-3
                </th>
                <td class="px-6 py-4">
                    2-3
                </td>
                <td class="px-6 py-4">
                    - 20-50 %
                </td>
            </tr>
             <tr class={trCSS}>
                 <th scope="row" class={thCSS}>
                   Day 2-3
                </th>
                <td class="px-6 py-4">
                    {'>'}3
                </td>
                <td class="px-6 py-4">
                    Hold and -50% , recheck INR day 7
                </td>
            </tr>
             <tr class={trCSS}>
                <th scope="row" class={thCSS}>
                   {'>'}Day 7
                </th>
                <td class="px-6 py-4">
                    จัดการตามตาราง INR ปกติ
                </td>
                <td class="px-6 py-4">
                    จัดการตามตาราง INR ปกติ
                </td>
            </tr>

        </tbody>
    </table>
</div>     
        </div>

  )
}

export default Guideline_2