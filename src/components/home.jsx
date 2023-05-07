import React from "react";
import ContactBar from "./contactbar/contactbar";
import MenuBar from "./menubar/menubar";
import MaingPage from "./mainpate/mainpage";
import About from "./about/about";
import Challenges from "./challenges/challenges";
import Website from "./website/website";
import Footer from "./footer/footer";

export default function peterVisibee() {
    return (

        <div style={{ width: '1366px', margin: 'auto' }}>
            <ContactBar />
            <MenuBar />
            <MaingPage />
            <About />
            <Challenges />
            <Website />
            <Footer />
        </div>
    )
}