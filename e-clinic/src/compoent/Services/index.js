import React from 'react';
import Icon1 from '../../photos/svg-1.svg'
import Icon2 from '../../photos/svg-2.svg'
import Icon3 from '../../photos/svg-3.svg'
import { ServicesContainer, ServicesWrapper,ServicesH1, ServicesCard, ServicesH2, ServicesP, ServicesIcon  } from './ServicesElements'

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Medicines we Provide</ServicesH2>
                <ServicesP>We help you access medicine at a affordable price.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>Medicine information</ServicesH2>
                <ServicesP>We let you know which medicine is best for the symptoms you are feeling.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Medicine reliability</ServicesH2>
                <ServicesP>We are a trusted source with years of experience to help you. </ServicesP>
            </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
