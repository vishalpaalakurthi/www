import Contact from "./elements";
import NavLink from 'next/link';
import Icon from 'react-icons-kit';
import { mail } from 'react-icons-kit/feather';

export default () => {
    return (
        <Contact id="contactus">
            <Contact.PrimaryTitle>Contact</Contact.PrimaryTitle>
            <Contact.ContactBody>
                 <Contact.Message> Feel free to reach out if you are looking for a developer. if you have any request or question, don’t hesitate to contact me. </Contact.Message>
                 <Contact.Title>  </Contact.Title>
                 <Contact.SubTitle>  </Contact.SubTitle>
                 <Contact.Navigation>
                        <NavLink href="mailto:vishalpaalakurthi@gmail.com">
                            <a><Icon icon={mail} /> {'   vishalpaalakurthi@gmail.com'}</a>
                        </NavLink>
                  </Contact.Navigation>
            </Contact.ContactBody>
        </Contact>
    )
}