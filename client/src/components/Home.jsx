import React, { useState } from 'react'
import hero from '../public/hero.png'
import and from '../public/and.png'
import arrow from '../public/arrow.png'
import decora from '../public/decora/decoraimg.png'
import launch from '../public/restomate/LaunchPage.png'
import odoo from '../public/odoo/odoo.png'

import github from '../public/github.png'
import expand from '../public/controls.png'

import ProjectMedia from './ProjectMedia'



export default function Home() {
    const [overdecora, setoverdecora] = useState(false)
    const [overrestomate, setoverrestomate] = useState(false)
    const [overodoo, setoverodoo] = useState(false)

    const [current, setcurrent] = useState()


    return (
        <div>

            <div class='about bg-[#E9EAFF] min-h-[110vh] grid ' id='about'>

                <img src={hero} alt="" className=' h-[70vh] ml-12 mb-[120px]' />

                <div className='about-text'>
                    <div className='text'>
                        <div className='flex'>
                            <h1 className='text-9xl  font-normal'>Frontend </h1>
                            <img src={and} alt="" className='max-h-[140px] ml-28' />

                        </div>

                        <h1 className='text-9xl font-normal'>Backend Developer</h1>


                        <p className='mr-[800px] mt-10 text-2xl leading-10 font-light '>I'm Nurdin, a full-stack developer skilled in ReactJS, Python, and various web technologies, creating everything from responsive user interfaces to robust backend systems. Recently, I’ve started exploring Odoo development and I'm excited to apply my skills to create business applications within its ecosystem.</p>
                    </div>
                </div>

            </div>


            <section id='projects' className='grid gap-[200px] bg-[#f4f1f76e] pb-20'>

                <div>
                    <div className=' ml-32 mt-40 flex flex-col gap-9'>
                        <h1 className=' text-[#2d048b] text-6xl'>Selected Works</h1>

                        <p className=' text-2xl leading-9 tracking-widest'>A few of my projects which  highlight <br />my strengths and areas of focus.</p>

                    </div>

                    <div className='first-project-col grid grid-cols-[25%_75%]'>

                        <div className='grid grid-rows-3'>
                            <img src={arrow} alt="" className='h-[240px]  start-end' />
                        </div>

                        <div className='first mt-16 ml-10'>

                            <div className=' proj w-[90%]' onMouseEnter={() => setoverdecora(true)} onMouseLeave={() => setoverdecora(false)}>




                                <div className='image '>
                                    <img src={decora} alt="" className=' h-[70vh]' />
                                </div>


                                <div className={overdecora ? 'overlay w-[100%]  ' : 'hidden'}>

                                    <div className='flex place-items-center justify-center gap-10'>
                                        <a href="https://github.com/Nurdin-Ismail/Decora-Frontend"><img src={github} alt="" /></a>
                                        <img src={expand} alt="" className=' cursor-pointer' onClick={() => setcurrent('decora')} />
                                    </div>


                                </div>









                            </div>

                            <div className=' flex flex-col gap-2'>
                                <h1 className='mt-5 text-2xl font-semibold'>Decora</h1>
                                <p className='ml-5 font-light text-lg'>A minimalist e-commerce platform focused on home decor, featuring a streamlined cart system and integrated MPesa payment gateway <br /> for a smooth and secure shopping experience.</p>


                            </div>



                        </div>

                    </div>
                </div>

                <div className='second grid place-content-start ml-[150px] '>

                    <div className=' proj w-[90%]' onMouseEnter={() => setoverrestomate(true)} onMouseLeave={() => setoverrestomate(false)}>




                        <div className='image '>
                            <img src={launch} alt="" className=' h-[72vh] ' />
                        </div>


                        <div className={overrestomate ? 'overlay w-[100%]  ' : 'hidden'}>
                            <div className='w-[50%] h-[10vh] bg-[#e9bfbf] grid mx-[25%] rounded-lg'>
                                <h1 className='text-2xl font-bold grid place-self-center'>WORK IN PROGRESS</h1>

                            </div>

                            <div className='flex place-items-center justify-center gap-10'>

                                {/* <a href="https://github.com/Nurdin-Ismail/Decora-Frontend"><img src={github} alt="" /></a> */}
                                <img src={expand} alt="" className=' cursor-pointer place-self-start' onClick={() => setcurrent('restomate')} />
                            </div>


                        </div>









                    </div>

                    <div className=' flex flex-col gap-2'>
                        <h1 className='mt-5 text-2xl font-semibold'>Restomate</h1>
                        <p className='ml-5 font-light text-lg'>Restomate is a mini SaaS platform designed to streamline restaurant operations. <br /> It handles both front-end tasks like order processing at the counter and back-end business logic, <br /> such as inventory management, staff scheduling, and financial reporting.</p>


                    </div>


                </div>


                <div className='third grid place-content-end ml-[150px] '>

                    <div className=' proj w-[90%]' onMouseEnter={() => setoverodoo(true)} onMouseLeave={() => setoverodoo(false)}>




                        <div className='image '>
                            <img src={odoo} alt="" className=' h-[70vh]' />
                        </div>


                        <div className={overodoo ? 'overlay w-[100%]  ' : 'hidden'}>

                            <div className='flex place-items-center justify-center gap-10'>
                                <a href="https://github.com/Nurdin-Ismail"><img src={github} alt="" /></a>
                                <img src={expand} alt="" className=' cursor-pointer' onClick={() => setcurrent('odoo')} />
                            </div>


                        </div>









                    </div>

                    <div className=' flex flex-col gap-2'>
                        <h1 className='mt-5 text-2xl font-semibold'>Property Ads</h1>
                        <p className='ml-5 font-light text-lg'>Property Ads is an Odoo module that facilitates property listings, managing offers, and property sales. <br />It includes features for defining apartment types, adding tags like whether the property is furnished or cozy, <br /> and tracking the status of properties through the entire sales process.</p>
                    </div>


                </div>

            </section>

            {current ? <ProjectMedia current={current} setcurrent={setcurrent} /> : null}

        </div >
    )
}
