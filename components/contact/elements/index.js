import { Container, Inner, Title, SubTitle, Description, Navigation, Break, PrimaryTitle, ContactBody, Message  } from '../styles';

export default function Contact({children, ...restProps}) {
    return (
        <Container {...restProps}>
            <Inner>
                {children}
            </Inner>
        </Container>
    )
}

Contact.Break = function ContactBreak({children, ...restProps}) {
    return (
        <Break {...restProps} />
    )
}

Contact.PrimaryTitle = function ContactPrimaryTitle({children, ...restProps}) {
    return (
        <PrimaryTitle {...restProps}>
            {children}
        </PrimaryTitle>
    )
}

Contact.ContactBody = function ContactContactBody({children, ...restProps}) {
    return (
        <ContactBody {...restProps}>
            {children}
        </ContactBody>
    )
}

Contact.Title = function ContactTitle({children, ...restProps}) {
    return (
        <Title {...restProps}>
            {children}
        </Title>
    )
}

Contact.SubTitle = function ContactSubTitle({children, ...restProps}) {
    return (
        <SubTitle {...restProps}>
            {children}
        </SubTitle>
    )
}

Contact.Description = function ContactDescription({children, ...restProps}) {
    return (
        <Description {...restProps}>
            {children}
        </Description>
    )
}

Contact.Navigation = function ContactNavigation({children, ...restProps}) {
    return (
        <Navigation {...restProps}>
            {children}
        </Navigation>
    )
}

Contact.Message = function ContactMessage({children, ...restProps}) {
    return (
        <Message {...restProps}>
            {children}
        </Message>
    )
}