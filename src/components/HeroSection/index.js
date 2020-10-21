import React from 'react';
import Video from '../../videos/video.mp4';
import { VideoBg, HeroBg, HeroContainer, HeroContent, HeroH1, Herop, Input, Icon, PlayTab } from './HeroElements';
import { FaSearch } from "react-icons/fa";
// import { FiDownload} from "react-icons/fi";


const HeroSection = () => {
    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} typeof='video' />   
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    Every Student Matters
                </HeroH1>
                <Herop>
                    Get your doubts clarified and attend LIVE classes <br/> in the language of your choice 
                </Herop>
            </HeroContent>
            <Input placeholder="Search here">                
            </Input>
            <Icon>
                <FaSearch/>
            </Icon>

            <PlayTab>
                Get the free app on Play Store
            </PlayTab>
            {/* <Icon1>
                <FiDownload/>
            </Icon1> */}
        </HeroContainer>
    )
}

export default HeroSection;
