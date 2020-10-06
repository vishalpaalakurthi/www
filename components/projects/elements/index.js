import { Container, Inner, Title, SubTitle, Description, Navigation, Project, Break, PrimaryTitle, ProjectsBody, Message  } from '../styles';

export default function Projects({children, ...restProps}) {
    return (
        <Container {...restProps}>
            <Inner>
                {children}
            </Inner>
        </Container>
    )
}

Projects.Break = function ProjectsBreak({children, ...restProps}) {
    return (
        <Break {...restProps} />
    )
}

Projects.Project = function ProjectsProject({children, ...restProps}) {
    return (
        <Project {...restProps}>
            {children}
        </Project>
    )
}

Projects.PrimaryTitle = function ProjectsPrimaryTitle({children, ...restProps}) {
    return (
        <PrimaryTitle {...restProps}>
            {children}
        </PrimaryTitle>
    )
}

Projects.ProjectsBody = function ProjectsProjectBody({children, ...restProps}) {
    return (
        <ProjectsBody {...restProps}>
            {children}
        </ProjectsBody>
    )
}

Projects.Title = function ProjectsTitle({children, ...restProps}) {
    return (
        <Title {...restProps}>
            {children}
        </Title>
    )
}

Projects.SubTitle = function ProjectsSubTitle({children, ...restProps}) {
    return (
        <SubTitle {...restProps}>
            {children}
        </SubTitle>
    )
}

Projects.Description = function ProjectsDescription({children, ...restProps}) {
    return (
        <Description {...restProps}>
            {children}
        </Description>
    )
}

Projects.Navigation = function ProjectsNavigation({children, ...restProps}) {
    return (
        <Navigation {...restProps}>
            {children}
        </Navigation>
    )
}

Projects.Message = function ProjectsMessage({children, ...restProps}) {
    return (
        <Message {...restProps}>
            {children}
        </Message>
    )
}