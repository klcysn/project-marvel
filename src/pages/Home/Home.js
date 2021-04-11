import React, { useState } from "react"
import './Home.scss';
import CharacterPages from '../CharacterPages/CharacterPages'
import ComicsPage from '../Comics/Comics'

import HomeCarousels from '../../Components/HomeCarousels/HomeCarousels'
import { Animated } from "react-animated-css";

const Home = () => {
    const [width, setWidth] = useState(window.innerWidth)

    function reportWindowSize() {
        setWidth(window.innerWidth)
      }
    
    window.onresize = reportWindowSize;
    return (
        <div>
            {width > 641 && <div className="homePage">              
                <Animated animationIn="bounceInLeft" animationOut="fadeOut" animationInDelay="200" isVisible={true}>
                <HomeCarousels />
                </Animated>
            </div>}
            <div id="CharacterPages" className="CharacterPages">
                <CharacterPages/>
            </div>
            <div id="ComicsPage"className="ComicsPage">
                <ComicsPage/>
            </div>
        </div>
    );
};

export default Home;