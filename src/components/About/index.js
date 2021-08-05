import React, { useEffect, useState } from 'react'
import {
    AboutNavbar, NavbarContainer, NavLogo, NavBtn, NavBtnLink, Column1, Column2, ColumnP,
    Heading, ImgWrap, InfoContainer, InfoRow, InfoWrapper, Subtitle, TextWrapper
} from './AboutElements'
import { about_es, about_en } from './AboutData';

import Image1 from '../../images/carousel_1.jpeg';
import Image2 from '../../images/carousel_2.jpeg';
import Image3 from '../../images/carousel_3.jpeg';
import Image4 from '../../images/carousel_4.jpeg';
import Image5 from '../../images/carousel_5.jpeg';

import imageES from '../../images/es-flag.png';
import imageEN from '../../images/en-flag.png';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { scrollToTop } from 'react-scroll/modules/mixins/animate-scroll';

const About = () => {

    // scrollToTop();

    const [lan, setLan] = useState('ES');
    let idioma = localStorage.getItem('lan');
    if (idioma == null) {
        setLan('ES')
    }

    useEffect(() => {
        localStorage.setItem('lan', lan);
    }, [lan]);

    let aboutpage_data;
    if (idioma == 'ES') {
        aboutpage_data = about_es;
    } else {
        aboutpage_data = about_en;
    }

    return (
        <>
            <AboutNavbar>
                <NavbarContainer>
                    <NavLogo to="/">JoseV</NavLogo>
                </NavbarContainer>
                <NavBtn>
                    <NavBtnLink onClick={() => localStorage.setItem('lan', 'ES')}><img src={imageES}></img></NavBtnLink>
                    <NavBtnLink onClick={() => localStorage.setItem('lan', 'EN')}><img src={imageEN}></img></NavBtnLink>
                </NavBtn>
            </AboutNavbar>

            <InfoContainer>
                <InfoWrapper>
                    <InfoRow imgStart={true}>
                        <Column1>
                            <TextWrapper>
                                <Subtitle darkText={true}>
                                    {aboutpage_data.texts.map((item) => {
                                            return (<ColumnP>{item}</ColumnP>)
                                        })
                                    }
                                </Subtitle>
                            </TextWrapper>
                        </Column1>

                        <Column2>
                            <ImgWrap>
                                <Carousel
                                    className="imgAbout"
                                    infinite={true}
                                    autoPlay={true}
                                    autoPlaySpeed={3000}
                                    infiniteLoop={true}
                                    disableArrowsOnEnd={true}
                                    showArrows={false}
                                >
                                    <div>
                                        <img src={Image1} />
                                    </div>
                                    <div>
                                        <img src={Image2} />
                                    </div>
                                    <div>
                                        <img src={Image3} />
                                    </div>
                                    <div>
                                        <img src={Image4} />
                                    </div>
                                    <div>
                                        <img src={Image5} />
                                    </div>
                                </Carousel>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default About
