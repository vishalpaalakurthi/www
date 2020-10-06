import { Container, Inner, Header, Title, Body, Article, SubHeader, TextItem } from '../styles';

export default function BlogPost({children, ...restProps}) {
    return (
        <Container {...restProps}>
            <Inner>
                {children}
            </Inner>
        </Container>
    )
}

BlogPost.Header = function BlogPostHeader({children, ...restProps}) {
    return (
        <Header {...restProps}>
            {children}
        </Header>
    )
}

BlogPost.SubHeader = function BlogPostSubHeader({children, ...restProps}) {
    return (
        <SubHeader {...restProps}>
            {children}
        </SubHeader>
    )
}

BlogPost.Title = function BlogPosTitle({children, ...restProps}) {
    return (
        <Title {...restProps}>
            {children}
        </Title>
    )
}

BlogPost.Body = function BlogPostBody({children, ...restProps}) {
    return (
        <Body {...restProps}>
            {children}
        </Body>
    )
}

BlogPost.Article = function BlogPostArticle({children, ...restProps}) {
    return (
        <Article {...restProps}>
            {children}
        </Article>
    )
}

BlogPost.TextItem = function BlogPostTextItem({children, ...restProps}) {
    return (
        <TextItem {...restProps}>
            {children}
        </TextItem>
    )
}