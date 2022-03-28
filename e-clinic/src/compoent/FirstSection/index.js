import React, {useState} from 'react'
import Video from '../../video/video.mp4'
import {FirstSectionContainer, FirstSectionBg, VideoBg, FirstSectionContent, FirstSectionH1, FirstSectionP, FirstSectionBtnWrapper, ArrowForward, ArrowRight} from './FirstSectionElements';
import {Button} from '../ButtonElements';

const FirstSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <FirstSectionContainer>
            <FirstSectionBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </FirstSectionBg>
            <FirstSectionContent>
                <FirstSectionH1>Medical Services In Your Pocket</FirstSectionH1>
                <FirstSectionP>
                    Book an appointment today
                </FirstSectionP>
                <FirstSectionBtnWrapper>
                    <Button to="/book" onMouseEnter={onHover} onMouseLeave={onHover}>
                        Get Started {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </FirstSectionBtnWrapper>
            </FirstSectionContent>
        </FirstSectionContainer>
    )
}

export default FirstSection
