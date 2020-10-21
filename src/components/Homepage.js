import React, { useState } from 'react';
import Navbar from './Navbar/index';
import Sidebar from './Sidebar/';
import HeroSection from './HeroSection';
import Card from './Card';
import Material from './Materials';
import Exams from './Exams';
import Subjects from './Subjects';
import Testimonial from './Testimonials';

const Homepage = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>  
        {(isOpen === true) ?
            <Sidebar isOpen={isOpen} toggle={toggle} />
            :
            null
        }

            <Navbar toggle={toggle} />
            <HeroSection />
            <Card />
            <Material />
            <Exams/>
            <Subjects/>
            <Testimonial />
        </>
    )
}

export default Homepage;
