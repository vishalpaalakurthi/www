import React from "react";
import ProfileCard from "../components/profilecard";
import Articles from "../components/articles";
import Projects from "../components/projects";
import Contact from "../components/contact";
import CP_Container from "../components/cp-container";

export default () => {

    return (
        <>
            <ProfileCard />
            <Articles limit={4} />
            <Projects />
            <Contact />

            {/* <CP_Container /> */}
        </>
    )
}