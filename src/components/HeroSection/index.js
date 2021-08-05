import React, { useState } from 'react'
import Video from '../../videos/video.mp4';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import { Button } from '../ButtonElements';


const HeroSection = ({ title, button }) => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted>
                    <source src={Video} type="video/mp4"></source>
                </VideoBg>
            </HeroBg>
            <HeroContent>
                <HeroH1>Jose Villar Corrales</HeroH1>
                <HeroP>
                    {title}
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="about" onMouseEnter={onHover} onMouseLeave={onHover} 
                        primary='true' dark='true'
                        smooth={true} duration={1000} spy={true} exact='true' offset={-80}>
                        {button} {hover ? <ArrowForward /> : <ArrowRight />}</Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
