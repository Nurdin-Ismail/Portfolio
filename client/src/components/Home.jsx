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

            <div class='about bg-[#E9EAFF]  ' id='about'>



                <div className='intro'>
                    <img id='hero' src={hero} alt="" className=' ' />

                    <div className='about-text'>
                        <div className='text'>
                            <div className='title'>
                                <h1 className='    font-normal'>Frontend </h1>
                                <img src={and} alt="" className='title-img' />

                            </div>

                            <h1 className=' font-normal'>Backend Developer</h1>


                            <p className='  text-2xl leading-10 font-light '>I'm Nurdin, a full-stack developer skilled in ReactJS, Python, and various web technologies, creating everything from responsive user interfaces to robust backend systems. Recently, I’ve started exploring Odoo development and I'm excited to apply my skills to create business applications within its ecosystem.</p>
                        </div>
                    </div>
                </div>

            </div>


            <section id='projects' className='grid'>
                {/* intro */}
                <div className=' project-intro'>


                    <h1 className=' text-[#2d048b] '>Selected Works</h1>

                    <p className=' '>A few of my projects which  highlight <br />my strengths and areas of focus.</p>
                    <div className='arrow  '>
                        <img src={arrow} alt="" className='h-[240px]  start-end' />
                    </div>

                </div>



                <div className="project-container">
                    {/* Decora */}

                    <div className='first  grid'>

                        <div className=' image-div' onMouseEnter={() => setoverdecora(true)} onMouseLeave={() => setoverdecora(false)}>




                            <div className='image'>
                                <img src={decora} alt="" className='' />
                            </div>


                            <div className={overdecora ? 'overlay w-[100%]  ' : 'hidden'}>

                                <div className='expand-image gap-1'>
                                    <a href="https://github.com/Nurdin-Ismail/Decora-Frontend"><img src={github} alt="" /></a>
                                    <img src={expand} alt="" className=' cursor-pointer' onClick={() => setcurrent('decora')} />
                                </div>


                            </div>









                        </div>

                        <div className='proj-text'>
                            <h1 className=''>Decora</h1>
                            <p className=''>A minimalist e-commerce platform focused on home decor, featuring a streamlined cart system and integrated MPesa payment gateway for a smooth and secure shopping experience.</p>


                        </div>



                    </div>

                    {/* Restomate */}

                    <div className='second grid  '>

                        <div className=' image-div' onMouseEnter={() => setoverrestomate(true)} onMouseLeave={() => setoverrestomate(false)}>




                            <div className='image '>
                                <img src={launch} alt="" className=' ' />
                            </div>


                            <div className={overrestomate ? 'overlay w-[100%]  ' : 'hidden'}>
                                <div className='progress'>
                                    <h1 className=''>WORK IN PROGRESS</h1>

                                </div>

                                <div className='expand expand-image'>

                                    <img src={expand} alt="" className=' cursor-pointer' onClick={() => setcurrent('restomate')} />
                                </div>


                            </div>









                        </div>

                        <div className=' proj-text'>
                            <h1 className=''>Restomate</h1>
                            <p className=''>Restomate is a mini SaaS platform designed to streamline restaurant operations. It handles both front-end tasks like order processing at the counter and back-end business logic, such as inventory management, staff scheduling, and financial reporting.</p>


                        </div>


                    </div>

                    {/* Odoo */}

                    <div className='third grid '>

                        <div className=' image-div' onMouseEnter={() => setoverodoo(true)} onMouseLeave={() => setoverodoo(false)}>




                            <div className='image '>
                                <img src={odoo} alt="" className=' ' />
                            </div>


                            <div className={overodoo ? 'overlay w-[100%]  ' : 'hidden'}>

                                <div className='expand-image'>
                                    <a href="https://github.com/Nurdin-Ismail/Pos-Mpesa-Integration"><img src={github} alt="" /></a>
                                    <img src={expand} alt="" className=' cursor-pointer' onClick={() => setcurrent('odoo')} />
                                </div>


                            </div>









                        </div>

                        <div className=' proj-text'>
                            <h1 className=''>Property Ads</h1>
                            <p className=''>Property Ads is an Odoo module that facilitates property listings, managing offers, and property sales. It includes features for defining apartment types, adding tags like whether the property is furnished or cozy,  and tracking the status of properties through the entire sales process.</p>
                        </div>


                    </div>
                </div>

            </section>

            {current ? <ProjectMedia current={current} setcurrent={setcurrent} /> : null}

        </div >
    )
}
