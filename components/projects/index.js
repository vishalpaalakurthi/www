import Projects from "./elements";
import NavLink from 'next/link';
import Icon from 'react-icons-kit';
import { arrowRight } from 'react-icons-kit/feather';
import { Articles as ArticlesData } from "../../assets/metadata/Metadata";
import { Projects as ProjectsData } from "../../assets/metadata/ProjectsMetadata";

export default () => {
    return (
        <Projects id="projects">
            <Projects.PrimaryTitle>What am i working on now ?</Projects.PrimaryTitle>
            <Projects.ProjectsBody>
                {ProjectsData.length === 0 
                    ? <Projects.Message> I am currently working on cool productivity projects. </Projects.Message>
                    :
                    ProjectsData.map((article, index) =>
                        (
                            <Projects.Project key={index}>
                                <Projects.Title> {article.title} </Projects.Title>
                                <Projects.SubTitle> {article.shortNote} </Projects.SubTitle>
                                <Projects.Navigation>
                                    <NavLink href={article.path}>
                                        <a> {'Visit'} <Icon icon={arrowRight} /></a>
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