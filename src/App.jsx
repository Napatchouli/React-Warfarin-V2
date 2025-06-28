import React from 'react'
const trCSS = "bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600";
const thCSS = "px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white";
function App() {
  return (
    <div className='inset-0 flex items-center justify-center min-h-screen'>
      

<div class="relative overflow-x-auto overflow-y-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
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
                   {'<'} 1.5
                </th>
                <td class="px-6 py-4">
                    + 10-20 %
                </td>
            </tr>
            <tr class={trCSS}>
                <th scope="row" class={thCSS}>
                    1.5-1.9
                </th>
                <td class="px-6 py-4">
                    + 5-10 %
                </td>
            </tr>
            <tr class={trCSS}>
                <th scope="row" class={thCSS}>
                    2.0-3.0
                </th>
                <td class="px-6 py-4">
                    continue same dose
                </td>
            </tr>
             <tr class={trCSS}>
                <th scope="row" class={thCSS}>
                    3.1-3.9
                </th>
                <td class="px-6 py-4">
                    - 5-10 %
                </td>
            </tr>
             <tr class={trCSS}>
                <th scope="row" class={thCSS}>
                    4.0-4.9
                </th>
                <td class="px-6 py-4">
                    Hold for 1 day then -10 %
                </td>
            </tr>
             <tr class={trCSS}>
                <th scope="row" class={thCSS}>
                    5.0-8.9 (no bleeding)
                </th>
                <td class="px-6 py-4">
                    Hold 1-2 doses, Vit.K1 1 mg orally
                </td>
            </tr>
             <tr class={trCSS}>
                <th scope="row" class={thCSS}>
                    {'>'} 9.0 (no bleeding)
                </th>
                <td class="px-6 py-4">
                    Vit.K1 5-10 mg Orally
                </td>
            </tr>
             <tr class={trCSS}>
                <th scope="row" class={thCSS}>
                    Major Bleeding with Any INR
                </th>
                <td class="px-6 py-4">
                    Vit.K1 10 mg IV + FFP , repeat Vit.K1 q 12 hr if needed
                </td>
            </tr>

        </tbody>
    </table>
</div>

    </div>
  )
}
export default App