import React from 'react'
import { ServicesCard, ServicesContainer, ServicesH1, ServicesH2, ServicesH3, ServicesIcon, ServicesP, ServicesWrapper } from './ServicesElements';



const Services = ({ title, subtitle, projects }) => {
    return (
        <ServicesContainer id="articles">
            <ServicesH1>{title}</ServicesH1>
            <ServicesH3>({subtitle})</ServicesH3>
            <ServicesWrapper>
                {projects.map((item, i) => {
                    return (
                        <ServicesCard>
                            <ServicesIcon src={item.icon} />
                            <ServicesH2>{item.title}</ServicesH2>
                            <ServicesP>{item.subtitle}</ServicesP>
                        </ServicesCard>
                    )
                })}
            </ServicesWrapper>

        </ServicesContainer>

    )
}

export default Services;
