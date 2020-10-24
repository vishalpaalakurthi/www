import Contact from "./elements";
import NavLink from 'next/link';
import Icon from 'react-icons-kit';
import { tablet, envelopeO } from 'react-icons-kit/fa';

export default () => {
    return (
        <Contact id="contactus">
            <Contact.PrimaryTitle>Let’s build something together</Contact.PrimaryTitle>
            <Contact.ContactBody>
                 <Contact.Message> Feel free to reach out if you are looking for a developer. if you have any request or question, don’t hesitate to contact me. </Contact.Message>
                 <Contact.Title>  </Contact.Title>
                 <Contact.SubTitle>  </Contact.SubTitle>
                 <Contact.Navigation>
                        <NavLink href="mailto:vishalpaalakurthi@gmail.com">
                            <a><Icon size={30} icon={envelopeO} />&nbsp;&nbsp;&nbsp; {'   vishalpaalakurthi@gmail.com'}</a>
                        </NavLink>
                  </Contact.Navigation>
                 <Contact.Navigation>
                        <NavLink href="mailto:vishalpaalakurthi@gmail.com">
                            <a><Icon size={30} icon={tablet} />&nbsp;&nbsp;&nbsp; {'   +91 9963487665'}</a>
                        </NavLink>
                  </Contact.Navigation>
            </Contact.ContactBody>
        </Contact>
    )
}