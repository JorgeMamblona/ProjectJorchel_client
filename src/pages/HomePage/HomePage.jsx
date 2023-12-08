import './HomePage.css'
import React from 'react';
import Lottie from 'lottie-react';

import animationData from './../../lotties/animationdefinitive.json'
import Background from '../../components/Background/back-ground';
import Footer from '../../components/Footer/Footer'



const HomePage = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div className="home-page">
            <div className="d-flex align-items-center justify-content-around">

                <h1 className='claim'>The best way to organize your projects.</h1>

                <Lottie
                    animationData={animationData}
                    loop={true}
                    autoplay={true}
                    style={{ width: '40%', height: 'auto', top: '2rem', position: 'relative', left: '1rem' }}

                />
            </div>
            <div className="my-area" >
                <ul className="my-circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div >
            <Footer />


        </div >



    )
}

export default HomePage