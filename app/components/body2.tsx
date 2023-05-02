import React from 'react'
import Safety from '../Images/safetyauto.jpg'
import Safety2 from '../Images/safetyautogirl.jpg'
import Image from 'next/image'

function body2() {
  return (
    <div className='flex min-h-screen m items-center justify-center bg-[#e5e5e5] mb-0 pb-0'>
        <div className='group h-96 w-80 [perspective:1000px] mx-6'>
            <div className='relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] border-4 border-solid border-[#E19901]'>
                <div className='absolute inset-0'>
                    <Image className='h-full w-full rounded-xl object-cover shadow-xl shadow-black/40' src={Safety} alt="" />
                </div>
                <div className='absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                    <div className='flex min-h-full flex-col items-center justify-center'>
                        <h1 className='text-3xl font-bold'>Corporate</h1>
                        <p className='text-lg'>text goes here</p>
                        <p className='text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <button className='mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900'> Learn More </button>
                    </div>
                </div>
            </div>
        </div>
        <div className='group h-96 w-80 [perspective:1000px] mx-6'>
            <div className='relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] border-4 border-solid border-[#58416c]'>
                <div className='absolute inset-0'>
                    <Image className='h-full w-full rounded-xl object-cover shadow-xl shadow-black/40' src={Safety2} alt="" />
                </div>
                <div className='absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                    <div className='flex min-h-full flex-col items-center justify-center'>
                        <h1 className='text-3xl font-bold'>Consumer</h1>
                        <p className='text-lg'>text goes here</p>
                        <p className='text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <button className='mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900'> Learn More </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default body2