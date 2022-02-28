import React from 'react'

export default function RoadmapElement({ road }) {
  return (
    <div style={{
        backgroundColor: `rgba(0, 0, 0, 0.8)`
    }} className='rodmap-elem flex items-center justify-center gap-6 rounded-xl p-5 m-5'>
        <div className="circle rounded-full w-[15px] h-[15px] bg-white"></div>
        <div className="text-container-roadmap">
            <h1 className="text-white text-3xl">{road.phase}</h1>
            <p className='text-white text-sm w-[20rem]'>
                { road.title }
            </p>
        </div>
    </div>
  )
}
