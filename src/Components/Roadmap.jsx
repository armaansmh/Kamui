import React, {useState} from 'react'
import Fireboy from "../Assets/DeadSkull.png"
import "./Roadmap.scss"
import RoadmapElement from './RoadmapElement'

export default function Roadmap() {
    const [roadmaps, setRoadmaps] = useState([
        { phase: 'Phase 1', title: 'Mint of 555 divine mortals and Listing on Secondary Marketplace' },
        { phase: 'Phase 2', title: 'Launch of token and staking and DAO implimentation' },
        { phase: 'Phase 3', title: 'Release of the pixelated Kamuis into the metaverse to form the Chapter 2 of the roadmap' },
    ])
  return (
    <div id="roadmap" style={{
        backgroundImage: `url(${Fireboy})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }} className='min-h-screen flex flex-col relative items-center justify-center w-screen overflow-hidden bg-black text-white'>
        <h1 style={{
            transform: `translateX(-50%)`
        }} className='text-white absolute top-[40px] left-1/2 text-3xl flex flex-col'>
            ROADMAP.
            <span style={{
                color: '#c55050'
            }} className='text-lg'>
                ロードマップ
            </span>
        </h1>
        <div className='roads-container flex flex-col lg:flex-row items-center justify-center mt-[90px]'>
            { roadmaps.map((road) => ( <RoadmapElement road={road} /> )) }
        </div>
    </div>
  )
}
