import { Container, Inner, Title, SubTitle, Description, Navigation, Article, Break, PrimaryTitle, ArticlesBody, Message  } from '../styles';

export default function Articles({children, ...restProps}) {
    return (
        <Container {...restProps}>
            <Inner>
                {children}
            </Inner>
        </Container>
    )
}

Articles.Break = function ArticlesBreak({children, ...restProps}) {
    return (
        <Break {...restProps} />
    )
}

Articles.Article = function ArticlesArticle({children, ...restProps}) {
    return (
        <Article {...restProps}>
            {children}
        </Article>
    )
}

Articles.PrimaryTitle = function ArticlesPrimaryTitle({children, ...restProps}) {
    return (
        <PrimaryTitle {...restProps}>
            {children}
        </PrimaryTitle>
    )
}

Articles.ArticlesBody = function ArticlesArticlesBody({children, ...restProps}) {
    return (
        <ArticlesBody {...restProps}>
            {children}
        </ArticlesBody>
    )
}

Articles.Title = function ArticlesTitle({children, ...restProps}) {
    return (
        <Title {...restProps}>
            {children}
        </Title>
    )
}

Articles.SubTitle = function ArticlesSubTitle({children, ...restProps}) {
    return (
        <SubTitle {...restProps}>
            {children}
        </SubTitle>
    )
}

Articles.Description = function ArticlesDescription({children, ...restProps}) {
    return (
        <Description {...restProps}>
            {children}
        </Description>
    )
}

Articles.Navigation = function ArticlesNavigation({children, ...restProps}) {
    return (
        <Navigation {...restProps}>
            {children}
        </Navigation>
    )
}

Articles.Message = function ArticlesMessage({children, ...restProps}) {
    return (
        <Message {...restProps}>
            {children}
        </Message>
    )
}