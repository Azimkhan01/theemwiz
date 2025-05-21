import React from 'react'

function HBox6() {
    const data = [
        {
            head:"Show All",
            no:14
        },
        {
            head:"Design",
            no:6
        },
        {
            head:"Branding",
            no:4
        },
        {
            head:"Illustration",
            no:3
        },
        {
            head:"Motion",
            no:1
        }
    ]
  return (
    <div className='bg-[#28293E] flex flex-col justify-center items-center p-4' >
        <h1 className='text-orange-500 text-sm py-4 font-semibold'>PORTFOLIO</h1>
        <h1 className='text-white text-4xl md:text-6xl py-4 font-extrabold' >Latest Work</h1>
        <div className='flex justify-center items-center py-4'>
            {
                data.map((d,i)=><Card key={i} head={d.head} no={d.no} />)
            }
        </div>
    </div>
  )
}

export default HBox6

const Card = ({head,no})=>{
    return (
        <div className='relative p-3 '>
            <h1 className='text-gray-300 text-xs md:text-sm text-center'>{head}</h1>
            <span className='text-gray-300 absolute top-0 -right-2 text-xs md:text-xs'>{no}</span>
        </div>
    )
}