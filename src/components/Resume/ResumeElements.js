import styled from 'styled-components';

export const ResumeContainer = styled.div`
    color: #000;
    background: rgb(230, 240, 230);
    `

export const ResumeWrapper = styled.div`
    display: grid;
    z-index: 1;
    min-height: calc(100vh - 60px);
    height: auto;
    max-width: 80vw;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
    padding-bottom: 60px;
`

export const ResumeTitle = styled.h1`
    text-align: center;
    font-weight: 700;
    margin-top: 30px;
`

export const ResumeSubtitle = styled.h4`
    text-align: center;
    font-weight: 350;
    margin-top: 10px;
    @media screen and (max-width: 650px){
        margin-bottom: -100px;
    }
`

export const ResumeRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(1fr, 1fr);
    /* align-items: center; */
    grid-template-areas: 'col1 col2'; 
    
    @media screen and (max-width: 650px){
        margin-top: 80px;
        grid-template-areas: 'col2' 'col1';
    }
`

export const Column1 = styled.div`
    grid-area: col2;
`

export const Column2 = styled.div`
    grid-area: col1;
    
`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`

export const ResumeContent = styled.div`
    height: auto;
    width: 100%;
`

export const ResumeItemTitle = styled.div`
    margin-bottom: 20px;
    font-weight: 600;
    
`

export const ResumeLabel = styled.div`
    text-decoration: underline;
    font-weight: 500;
    @media screen and (max-width: 650px){
        display: inline;
    }
`

export const ResumeContentTitle = styled.h1`
    text-align: left;
    text-decoration: underline;
    margin: 20px 20px;
`

export const ResumeContentSubtitle = styled.h2`
    text-align: left;
    margin-left: 15px;
    margin-top: 55px;
`

export const ContentBlock = styled.div`
    text-align: left;
    border-bottom: 2px solid black;
`

export const ContentTitle = styled.h3`
    margin-left: 14px;
    margin-top: 30px;
`

export const ContentSubtitle = styled.h4`
    margin-top: 8px;
    margin-left: 10px;
`

export const ContentText = styled.p`
    margin-top: 10px;
    font-size: 16px;
    margin-bottom: 20px;
    text-align: justify;
    text-justify: inter-word;
`

export const SkillTitle = styled.div`
    display: inline;
    margin-left: 14px;
    margin-top: 30px;
`

export const ContentSkillsBlock = styled.div`
    width: 100%;
    height: 100px;
    margin-bottom: 100px;
`

export const ContentSkillsBlockLeft = styled.div`
    width: 49%;
    text-align: left;
    float: left;
    margin-top: 20px;
    @media screen and (max-width: 650px){
        float: left;
        width: 100%;
    }
`

export const ContentSkillsBlockRight = styled.div`
    text-align: right;
    float: right;
    width: 49%;
    margin-top: 20px;
    @media screen and (max-width: 650px){
        text-align: left;
        float: left;
        width: 100%;
    }
`

export const SkillBar = styled.div`
    display: block;
    height: 5px;
    border-radius: .25rem;
    width: 100%;
    background-color: lightblue;
    margin-top: 10px;
`

export const SkillBarHtml = styled.span`
    display: block;
    height: 5px;
    border-radius: .25rem;
    width: 90%;
    background-color: blue;
    margin-top: 10px;
`

export const SkillBarPhp = styled.span`
    display: block;
    float: right;
    height: 5px;
    border-radius: .25rem;
    width: 90%;
    background-color: blue;
    @media screen and (max-width: 650px){
        float: left;
    }
`

export const SkillBarReact = styled.span`
    display: block;
    float: left;
    height: 5px;
    border-radius: .25rem;
    width: 80%;
    background-color: blue;
    @media screen and (max-width: 650px){
        float: left;
    }
`

export const SkillBarAngular = styled.span`
    display: block;
    float: right;
    height: 5px;
    border-radius: .25rem;
    width: 60%;
    background-color: blue;
    @media screen and (max-width: 650px){
        float: left;
    }
`

export const SkillBarC = styled.span`
    display: block;
    float: left;
    height: 5px;
    border-radius: .25rem;
    width: 50%;
    background-color: blue;
    @media screen and (max-width: 650px){
        float: left;
    }
`

export const SkillBarJava = styled.span`
    display: block;
    float: right;
    height: 5px;
    border-radius: .25rem;
    width: 50%;
    background-color: blue;

    @media screen and (max-width: 650px){
        float: left;
    }
`

export const SkillBarLanguajes = styled.div`
    display: block;
    height: 5px;
    border-radius: .25rem;
    width: 100%;
    background-color: lightgreen;
    margin-top: 10px;
`

export const SkillBarSpanish = styled.span`
    display: block;
    float: right;
    height: 5px;
    border-radius: .25rem;
    width: 100%;
    background-color: green;
    @media screen and (max-width: 650px){
        float: left;
    }
`

export const SkillBarGalician = styled.span`
    display: block;
    float: right;
    height: 5px;
    border-radius: .25rem;
    width: 100%;
    background-color: green;
    @media screen and (max-width: 650px){
        float: left;
    }
`

export const SkillBarEnglish = styled.span`
    display: block;
    float: left;
    height: 5px;
    border-radius: .25rem;
    width: 60%;
    background-color: green;
    @media screen and (max-width: 650px){
        float: left;
    }
`

