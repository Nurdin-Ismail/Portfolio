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

            return <div className='modal-center'>
                <div className='decora-div '>
                    <div
                        className='best'
                        style={{ transform: `translateX(-${slide * 100}%)` }} // Calculating the translate
                    >

                        {slides.map((item, index) => (
                            <video key={index} className='decora-vid' autoPlay loop muted playsInline>
                                <source src={item} type="video/mp4" />
                            </video>
                        ))}
                    </div>

                </div></div>





        } else if (current == 'restomate' && slides) {
            return <div className=' decora-div '>
                <div
                    className='best'
                    style={{ transform: `translateX(-${slide * 100}%)` }} // Calculating the translate
                >
                    {slides.map((item, index) => (
                        <img
                            src={item}
                            alt=""
                            key={index}
                            className='  decora-vid'
                        />
                    ))}
                </div>
            </div>

        } else if (current == 'odoo') {
            return <div className=' decora-div'>
                <div
                    className=''
                >

                    <video className='decora-vid' autoPlay loop muted playsInline>
                        <source src={odoo} type="video/mp4" />
                    </video>


                </div>
            </div>

        }

    }

    return (
        <div>
            <div
                className='modal-bg '
                onClick={() => setcurrent(false)}
            ></div>

            <div className='modal  '>




                <div className='stable'>
                    <div className="modal-content">
                        {handleContent()}


                        <div className='content-name '>
                            {/* arrow left */}
                            <div className={current == 'odoo' ? ' hidden' : 'center-end '}>
                                <div
                                    className={slide == 0 ? ' arrow1  opacity-50 '
                                        :
                                        ' arrow1 '}
                                    onClick={() => handleslides('left')}>
                                    <img className="  " src={forward} alt="" />
                                </div>

                            </div>

                            {/* names */}
                            <div className='names-div'>

                                <div className='names-container best'
                                    style={{ transform: `translateX(-${slide * 600}px)` }}>
                                    {titles ? titles.map((item, index) => {
                                        return <h1 key={index} className='name'>
                                            {item}
                                        </h1>

                                    }) : null}
                                </div>

                            </div>

                            {/* arrow right */}
                            <div
                                className={current == 'odoo' ? 'hidden' : 'center-start'}>
                                <div
                                    className={slides.length - 1 != slide ?
                                        ' arrow2   '
                                        :
                                        ' arrow2 opacity-50 '}
                                    onClick={() => handleslides('right')}>
                                    <img className="" src={forward} alt="" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
