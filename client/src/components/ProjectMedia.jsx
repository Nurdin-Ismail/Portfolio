import React, { useEffect, useState } from 'react'
import video from '../public/decora/decoRA.mp4'
// import adminlogin from '../public/restomate/AdminLogin.png'
import analytics from '../public/restomate/Analytics 1.png'
import dashboard from '../public/restomate/Dashboard 1.png'
import review from '../public/restomate/Reviews 1.png'
// import orderpage from '../public/restomate/OrderPage.png'
import orderlist from '../public/restomate/Order List 1.png'
import forward from '../public/forward.png'

import odoo from '../public/odoo/Odoo.mp4'


export default function ProjectMedia({ current, setcurrent }) {
    const [slide, setslide] = useState(0);
    const [slides, setslides] = useState(0);
    const [titles, settitles] = useState(0)

    useEffect(() => {

        if (current == 'decora') {

            let content = [video, video, video, video, video]
            let titles = ['Home', 'Shop', 'Product', 'User', 'Cart']

            if (content && titles) {
                setslides(content)
                settitles(titles)
            }

        } else if (current == 'restomate') {
            let content = [dashboard, analytics, review, orderlist]
            let titles = ['Dashboard', 'Analytics', 'Reviews', 'Order List']

            if (content && titles) {
                setslides(content)
                settitles(titles)
            }

        }

    }, [])


    function handleslides(direction) {

        if (current) {
            if (direction == 'left' && slide != 0) {
                setslide(slide - 1)
            } else if (direction == 'right' && slide != slides.length - 1) {
                setslide(slide + 1)

            }
        }

    }

    function handleContent() {

        if (current == 'decora' && slides) {

            return <div className='grid place-content-center my-8 py-2 mx-40 border-[#d1c0c0] border-[2px] rounded-xl overflow-hidden'>
                <div
                    className='flex best gap-5 ml-4'
                    style={{ transform: `translateX(-${slide * 1520}px)` }} // Calculating the translate
                >

                    {slides.map((item, index) => (
                        <video key={index} width="1500px" autoPlay loop muted playsInline>
                            <source src={item} type="video/mp4" />
                        </video>
                    ))}
                </div>

            </div>





        } else if (current == 'restomate' && slides) {
            return <div className=' place-content-center my-8 py-2 mx-40 border-[#d1c0c0] border-[2px] overflow-hidden rounded-xl '>
                <div
                    className='grid grid-flow-col  best  gap-5 ml-4 '
                    style={{ transform: `translateX(-${slide * 1520}px)` }} // Calculating the translate
                >
                    {slides.map((item, index) => (
                        <img
                            src={item}
                            alt=""
                            key={index}
                            className='  min-w-[1500px] h-[70vh]'
                        />
                    ))}
                </div>
            </div>

        } else if (current == 'odoo') {
            return <div className=' place-content-center my-8 py-2 mx-40 border-[#d1c0c0] border-[2px] overflow-hidden rounded-xl '>
                <div
                    className='grid grid-flow-col  best  gap-5 ml-4 '
                >

                    <video width="1500px" autoPlay loop muted playsInline>
                        <source src={odoo} type="video/mp4" />
                    </video>


                </div>
            </div>

        }

    }

    return (
        <div>
            <div
                className='modal fixed h-[100vh] top-[0vh] flex justify-center items-center left-[0vw] w-[100vw] modalo'
                onClick={() => setcurrent(false)}
            ></div>

            <div className='modal fixed text-black text-xl h-[90vh] top-[5vh] left-[5vw] w-[90vw] bg-white rounded-lg '>



                {handleContent()}


                <div className='title grid grid-cols-3 h-[10vh]'>
                    <div className={current == 'odoo' ? ' hidden' : 'center-end '}>
                        <div className={slide == 0 ? ' z-20 arrow1 rounded-full bg-violet-200 h-[40px] w-[40px] opacity-50 ' : ' z-20 arrow1 rounded-full bg-violet-200 h-[40px] w-[40px] center-end '} onClick={() => handleslides('left')}><img className=" cursor-pointer rotate-180 h-[25px] mx-[6px] my-[6px]  " src={forward} alt="" /></div>

                    </div>
                    <div className='grid place-self-center overflow-hidden'>

                        <div className='flex best  w-[616px]'
                            style={{ transform: `translateX(-${slide * 600}px)` }}>
                            {titles ? titles.map((item, index) => {
                                return <h1 key={index} className='min-w-[600px] text-center'>
                                    {item}
                                </h1>

                            }) : null}
                        </div>

                    </div>
                    <div className={current == 'odoo' ? 'hidden' : 'center-start'}>
                        <div className={slides.length - 1 != slide ? ' z-30 arrow2 rounded-full bg-violet-200 h-[40px] w-[40px] center-start ' : ' z-30 arrow2 rounded-full bg-violet-200 h-[40px] w-[40px] center-start opacity-50 '} onClick={() => handleslides('right')}><img className=" cursor-pointer h-[25px] mx-[8px] my-[7.5px]" src={forward} alt="" /></div>

                    </div>
                </div>
            </div>
        </div>
    );
}
