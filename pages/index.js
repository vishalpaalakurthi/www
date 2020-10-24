import React from "react";
import ProfileCard, { SubProfileCard } from "../components/profilecard";
import Articles from "../components/articles";
import Projects from "../components/projects";
import Contact from "../components/contact";
import CP_Container from "../components/cp-container";

export default () => {

    return (
        <>
            <ProfileCard />
            <SubProfileCard />
            <Articles limit={3} title={"Recent Articles"} />
            <Projects />
            <Contact />

            {/* <CP_Container /> */}
        </>
    )
}