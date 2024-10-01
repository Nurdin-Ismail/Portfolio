import React, { useEffect, useState } from 'react'
import home from '../public/decora/decoRA.mp4'
import shop from '../public/decora/store.mp4'
import product from '../public/decora/product.mp4'
import user from '../public/decora/User Login Page.mp4'
import cart from '../public/decora/cart.mp4'
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

            let content = [home, shop, product, user, cart]
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

            return <div className='decora-div '>
                    <div
                        className='best'
                        style={{ transform: `translateX(-${slide * 100}%)` }} // Calculating the translate
                    >

                        {slides.map((item, index) => (
                            <video key={index} className=' grid decora-vid' autoPlay loop muted playsInline>
                                <source src={item} type="video/mp4" />
                            </video>
                        ))}
                    </div>

                </div>





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





                    <div className="modal-content">

                        {handleContent()}


                        <div className='content-name '>
                            <div className='container-2'>
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
                                className={current == 'odoo' ? 'hidden' : ' arrow-and-exit'}>
                                <div
                                    className={slides.length - 1 != slide ?
                                        ' arrow2   '
                                        :
                                        ' arrow2 opacity-50 '}
                                    onClick={() => handleslides('right')}>

                                    <img className="" src={forward} alt="" />

                                </div>

                                 <h1 className='exit' onClick={() => setcurrent(false)}>X</h1>


                            </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        
    );
}
