import { Container, Inner, Inner2, Title, SubTitle, Social, Break, Block, Text, Button } from '../styles';

export default function ProfileCard({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            {children}
        </Container>

    )
}

ProfileCard.Inner = function ProfileCardInner({ children, ...restProps }) {
    return (
        <Inner {...restProps}>
            {children}
        </Inner>
    )
}



ProfileCard.Inner2 = function ProfileCardInner2({ children, ...restProps }) {
    return (
        <Inner2 {...restProps}>
            {children}
        </Inner2>
    )
}

ProfileCard.Block = function ProfileCardBlock({ children, ...restProps }) {
    return (
        <Block {...restProps}>
            {children}
        </Block>
    )
}

ProfileCard.Text = function ProfileCardText({ children, ...restProps }) {
    return (
        <Text {...restProps}>
            {children}
        </Text>
    )
}

ProfileCard.Title = function ProfileCardTitle({ children, ...restProps }) {
    return (
        <Title {...restProps}>
            {children}
        </Title>
    )
}

ProfileCard.SubTitle = function ProfileCardSubTitle({ children, ...restProps }) {
    return (
        <SubTitle {...restProps}>
            {children}
        </SubTitle>
    )
}

ProfileCard.Social = function ProfileCardSocial({ children, ...restProps }) {
    return (
        <Social {...restProps}>
            {children}
        </Social>
    )
}

ProfileCard.Break = function ProfileCardBreak({ children, ...restProps }) {
    return (
        <Break {...restProps}>
            {children}
        </Break>
    )
}

ProfileCard.Button = function ProfileCardButton({children, ...restProps}) {
    return (
        <Button {...restProps}>
            {children}
        </Button>
    )
}