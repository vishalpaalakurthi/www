import { Container, Inner, Title, SubTitle, Social, Break } from '../styles';

export default function ProfileCard ({children, ...restProps}) {
    return (
        <Container {...restProps}>
            <Inner>
                {children}
            </Inner>
        </Container>

    )
}

ProfileCard.Title = function ProfileCardTitle({children, ...restProps}) {
    return (
        <Title {...restProps}>
            {children}
        </Title>
    )
}

ProfileCard.SubTitle = function ProfileCardSubTitle({children, ...restProps}) {
    return (
        <SubTitle {...restProps}>
            {children}
        </SubTitle>
    )
}

ProfileCard.Social = function ProfileCardSocial({children, ...restProps}) {
    return (
        <Social {...restProps}>
            {children}
        </Social>
    )
}

ProfileCard.Break = function ProfileCardBreak({children, ...restProps}) {
    return (
        <Break {...restProps}>
            {children}
        </Break>
    )
}