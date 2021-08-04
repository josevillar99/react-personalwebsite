import React, { useEffect, useState } from 'react'
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { homeObjOne_es, homeObjTwo_es, homeObjThree_es, homeObjOne_en, homeObjTwo_en, homeObjThree_en } from '../components/InfoSection/Data';
import { projects_es, projects_en } from '../components/Services/servicesData';
import { sidebar_es, sidebar_en } from '../components/Sidebar/SidebarData';
import { home_es, home_en } from '../components/HeroSection/HeroData';
import Services from '../components/Services';
import Footer from '../components/Footer';


const Home = () => {

    const [lan, setLan] = React.useState('ES');
    const [isOpen, setIsOpen] = useState(false);

    let idioma = localStorage.getItem('lan');
    if (idioma == null) {
        setLan('ES')
        localStorage.setItem('lan', lan);
    }

    useEffect(() => {
        localStorage.setItem('lan', lan);
    }, [lan]);



    const toggle = () => {
        setIsOpen(!isOpen);
    }

    // let info_data;
    let project_data;
    let sidebar_data;
    // let navbar_data;
    let hero_data;
    let homeObj = [];
   
    if (idioma == 'ES') {
        project_data = projects_es;
        sidebar_data = sidebar_es;
        hero_data = home_es;
        homeObj[0] = homeObjOne_es;
        homeObj[1] = homeObjTwo_es;
        homeObj[2] = homeObjThree_es;
        
    } else {
        project_data = projects_en;
        sidebar_data = sidebar_en;
        hero_data = home_en;
        homeObj[0] = homeObjOne_en;
        homeObj[1] = homeObjTwo_en;
        homeObj[2] = homeObjThree_en;
        
    }


    return (
        <>
            <Sidebar {...sidebar_data} isOpen={isOpen} toggle={toggle} />
            <Navbar {...sidebar_data} toggle={toggle} />
            <HeroSection {...hero_data}/>
            <InfoSection {...homeObj[0]} />
            <InfoSection {...homeObj[1]} />
            <Services {...project_data} />
            <InfoSection {...homeObj[2]} />
            <Footer />
        </>
    )
}

export default Home;
