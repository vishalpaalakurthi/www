import ProfileCard from "../components/profilecard";
import Articles from "../components/articles";
import Projects from "../components/projects";
import Contact from "../components/contact";

export default () => {
    return (
        <>
            <ProfileCard />
            <Articles limit={4} />
            <Projects />
            <Contact />
        </>
    )
}