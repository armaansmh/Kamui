import React, {useState} from 'react'
import Fireboy from "../Assets/DeadSkull.png"
import "./Roadmap.scss"
import RoadmapElement from './RoadmapElement'

export default function Roadmap() {
    const [roadmaps, setRoadmaps] = useState([
        { phase: 'Phase 1', title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting' },
        { phase: 'Phase 2', title: 'Have Sex with your moam test test test testLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting' },
        { phase: 'Phase 3', title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting' },
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
