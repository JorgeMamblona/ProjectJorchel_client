import './HomePage.css'
import React from 'react';
import Lottie from 'lottie-react';

import animationData from './../../lotties/Animation - 1701866819359.json'



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
            <div>
                <Lottie
                    animationData={animationData}
                    loop={true}
                    autoplay={true}
                    style={{ width: '50%', height: 'auto' }}
                />
            </div>
            <div className="area" >
                <ul className="circles">
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
        </div>



    )
}

export default HomePage