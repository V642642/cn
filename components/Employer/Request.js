import React from 'react'

export default function Request() {
  return (
    <div className='w-full font-primary py-20 flex items-center justify-center flex-col'>
        <h2 className='text-[35px]'>Want to explore more?</h2>
        <p>Ask to see our platform in action</p>
        <a href="#_" className="rounded-md my-10 px-6 py-3 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-green-600 text-green-600 ">
<span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-green-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
<span class="relative text-green-600 transition duration-300 group-hover:text-white ease">REQUEST A DEMO</span>
</a>
    </div>
  )
}
