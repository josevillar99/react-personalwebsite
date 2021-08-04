import React, { useEffect, useState } from 'react'
import { AboutNavbar, NavbarContainer, NavBtn, NavBtnLink, NavLogo } from '../About/AboutElements'

import imageES from '../../images/es-flag.png';
import imageEN from '../../images/en-flag.png';
import ImageOne from '../../images/resume.jpg';
import {
    ContentBlock, ContentSkillsBlock, ContentSkillsBlockLeft, ContentSkillsBlockRight, ContentSubtitle, ContentText,
    ContentTitle, ResumeContainer, ResumeContent, ResumeContentTitle, ResumeItemTitle, ResumeLabel, ResumeRow, ResumeSubtitle,
    ResumeTitle, ResumeWrapper, SkillBar, SkillBarAngular, SkillBarC, SkillBarHtml, SkillBarJava, SkillBarPhp, SkillBarReact,
    SkillTitle, ResumeContentSubtitle, SkillBarSpanish, SkillBarGalician, SkillBarEnglish
} from './ResumeElements';
import { Column1, Column2, ImgWrap } from '../InfoSection/InfoElements';

import { resume_es, resume_en } from './ResumeData';


import ScrollToTop from '../ScrollToTop';

const Resume = () => {

    ScrollToTop();

    const [lan, setLan] = useState('ES');
    let idioma = localStorage.getItem('lan');
    if (idioma == null) {
        setLan('ES')
    }

    useEffect(() => {
        localStorage.setItem('lan', lan);
    }, [lan]);

    let resume_data;
    if (idioma == 'ES') {
        resume_data = resume_es;
    } else {
        resume_data = resume_en;
    }

    const { title, download, name, place, date, email, phone, blocks, abilitiesTitle, subtitle1, pro1, pro2, pro3, pro4, pro5, pro6, subtitle2, lan1, lan2, lan3 } = resume_data;

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

            <ResumeContainer>
                <ResumeWrapper>
                    <ResumeTitle>{title}</ResumeTitle>
                    <ResumeSubtitle>{download} - (06-2021)</ResumeSubtitle>
                    <ResumeRow>
                        <Column1 className="resumeColumn1">
                            <ResumeItemTitle><ResumeLabel>{name}:</ResumeLabel> Jose Villar Corrales.</ResumeItemTitle>
                            <ResumeItemTitle><ResumeLabel>{place}:</ResumeLabel> Moaña, España </ResumeItemTitle>
                            <ResumeItemTitle><ResumeLabel>{date}:</ResumeLabel> 29 Diciembre 1999 </ResumeItemTitle>
                            <ResumeItemTitle><ResumeLabel>{email}:</ResumeLabel> josevillarcorrales99@gmail.com </ResumeItemTitle>
                            <ResumeItemTitle><ResumeLabel>{phone}:</ResumeLabel> +34 640 09 79 86 </ResumeItemTitle>
                        </Column1>

                        <Column2>
                            <ImgWrap>
                                <img className="imgResume" src={ImageOne}></img>
                            </ImgWrap>
                        </Column2>
                    </ResumeRow>
                    <ResumeContent>
                        {blocks.map((item, index) => (
                            <>
                                <ResumeContentTitle>{item.title}</ResumeContentTitle>
                                {item.data.map((item2, i) => (
                                    <>
                                        <ContentBlock>
                                            <ContentTitle>{item2.subtitle}</ContentTitle>
                                            <ContentSubtitle>{item2.center}</ContentSubtitle>
                                            <ContentText>
                                                {item2.data.map((item3, a) => {
                                                    return (
                                                        <p>{item3}</p>
                                                    )
                                                })}
                                            </ContentText>
                                        </ContentBlock>
                                    </>
                                ))}
                            </>
                        ))}


                        <ResumeContentTitle>{abilitiesTitle}</ResumeContentTitle>
                        <ResumeContentSubtitle>{subtitle1}</ResumeContentSubtitle>
                        <ContentSkillsBlock>
                            <ContentSkillsBlockLeft>
                                <SkillTitle>{pro1}</SkillTitle>
                                <SkillBar>
                                    <SkillBarHtml></SkillBarHtml>
                                </SkillBar>
                            </ContentSkillsBlockLeft>
                            <ContentSkillsBlockRight>
                                <SkillTitle>{pro2}</SkillTitle>
                                <SkillBar>
                                    <SkillBarPhp></SkillBarPhp>
                                </SkillBar>
                            </ContentSkillsBlockRight>

                            <ContentSkillsBlockLeft>
                                <SkillTitle>{pro3}</SkillTitle>
                                <SkillBar>
                                    <SkillBarReact></SkillBarReact>
                                </SkillBar>
                            </ContentSkillsBlockLeft>
                            <ContentSkillsBlockRight>
                                <SkillTitle>{pro4}</SkillTitle>
                                <SkillBar>
                                    <SkillBarAngular></SkillBarAngular>
                                </SkillBar>
                            </ContentSkillsBlockRight>

                            <ContentSkillsBlockLeft>
                                <SkillTitle>{pro5}</SkillTitle>
                                <SkillBar>
                                    <SkillBarC></SkillBarC>
                                </SkillBar>
                            </ContentSkillsBlockLeft>
                            <ContentSkillsBlockRight>
                                <SkillTitle>{pro6}</SkillTitle>
                                <SkillBar>
                                    <SkillBarJava></SkillBarJava>
                                </SkillBar>
                            </ContentSkillsBlockRight>
                        </ContentSkillsBlock>

                        <ResumeContentSubtitle>{subtitle2}</ResumeContentSubtitle>
                        <ContentSkillsBlock>
                            <ContentSkillsBlockLeft>
                                <SkillTitle>{lan1}</SkillTitle>
                                <SkillBar>
                                    <SkillBarSpanish></SkillBarSpanish>
                                </SkillBar>
                            </ContentSkillsBlockLeft>
                            <ContentSkillsBlockRight>
                                <SkillTitle>{lan2}</SkillTitle>
                                <SkillBar>
                                    <SkillBarGalician></SkillBarGalician>
                                </SkillBar>
                            </ContentSkillsBlockRight>
                            <ContentSkillsBlockLeft>
                                <SkillTitle>{lan3}</SkillTitle>
                                <SkillBar>
                                    <SkillBarEnglish></SkillBarEnglish>
                                </SkillBar>
                            </ContentSkillsBlockLeft>
                        </ContentSkillsBlock>
                    </ResumeContent>
                </ResumeWrapper>
            </ResumeContainer>
        </>
    )
}

export default Resume
