import Projects from "./elements";
import NavLink from 'next/link';
import Icon from 'react-icons-kit';
import { arrowRight } from 'react-icons-kit/feather';
import { RecentArticles } from "../../assets/metadata/Metadata";
import { RecentProjects } from "../../assets/metadata/ProjectsMetadata";

export default () => {
    return (
        <Projects id="projects">
            <Projects.PrimaryTitle>Projects</Projects.PrimaryTitle>
            <Projects.ProjectsBody>
                {RecentProjects.length === 0 
                    ? <Projects.Message> I am currently working on cool productivity projects. </Projects.Message>
                    :
                    RecentProjects.map((article, index) =>
                        (
                            <Projects.Project key={index}>
                                <Projects.Title> {article.title} </Projects.Title>
                                <Projects.SubTitle> {article.shortNote} </Projects.SubTitle>
                                <Projects.Navigation>
                                    <NavLink href={article.path}>
                                        <a> {'view more '} <Icon icon={arrowRight} /></a>
                                    </NavLink>
                                </Projects.Navigation>
                            </Projects.Project>
                        )
                    )
                }
            </Projects.ProjectsBody>
        </Projects>
    )
}