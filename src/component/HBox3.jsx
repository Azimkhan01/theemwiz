import React from 'react'

function HBox3() {

    const data = [
        {
        head:"42%",
        note:"Years of experience"
        },
        {
        head:"73+",
        note:"Agency members"
        },
        {
            head:"5.000",
            note:"Projects complete"
        }      
]

  return (
    <div className='flex flex-col md:flex-row justify-center tems-center bg-orange-50 px-6 md:p-0'>
        {
            data.map((d,i)=><Card key={i} head={d.head} Note={d.note} />)
        }
    </div>
  )
}

export default HBox3


const Card = ({head,Note})=>{
    return (
        <div className='flex flex-col gap-3 p-20 text-[#391400] border border-orange-500/20'>
            <div>
                <h1 className='text-4xl font-extrabold'>{head}</h1>
            </div>
            <div>
                <p className='text-[#391400] font-sans text-xl'>{Note}</p>
            </div>
        </div>
    )
}