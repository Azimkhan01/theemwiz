import React from 'react'

function HBox9() {
  return (
    <div className='flex py-6 md:px-60  justify-between bg-[#28293E]'>

            {/* left section */}
           <div>
                <h1 className='text-orange-400 p-4 md:p-0'>OUR TEAM</h1>
                <p className=' text-5xl md:text-4xl font-bold text-white p-4 md:p-0 '>Team of Designers <br></br> and Developers</p>
           </div>

           {/* right section */}
           <div className=' hidden md:flex justify-end flex-col '>

                <div className='flex gap-4 '>
                    <button className='p-4 border border-white/20 rounded-full flex justify-center items-center' >
                        <img src='/hb9-bg/Path.svg' className='object-cover' />
                    </button>
                    <button className='p-4 border border-white/20 rounded-full flex justify-center items-center' >
                        <img src='/hb9-bg/Path.svg' className='rotate-180 object-cover' />
                    </button>
                </div>

           </div>

    </div>
  )
}

export default HBox9
