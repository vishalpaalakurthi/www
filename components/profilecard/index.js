import ProfileCard from './elements';
import Social from '../Social';
import HelloHuman from '../../assets/svgs/hellohuman';
import HeyHuman from '../../assets/svgs/heyhuman';
export default () => {
    return (
        <ProfileCard>
            <ProfileCard.Inner>
                <ProfileCard.Block>
                    <ProfileCard.Text style={{ fontSize: '45px', fontWeight: '500' }}>
                        Hey _____________________
                </ProfileCard.Text>
                    <ProfileCard.Text style={{ fontSize: '70px', fontWeight: 'bold' }}>
                        I AM VISHAL
                </ProfileCard.Text>
                    <ProfileCard.Text style={{ fontSize: '23px', fontWeight: '500' }}>
                        Developer | Freelancer | Product Development
                </ProfileCard.Text>
                    <ProfileCard.Social>
                        <Social size={45} />
                    </ProfileCard.Social>
                </ProfileCard.Block>
                <ProfileCard.Block>
                    <HelloHuman />
                </ProfileCard.Block>
            </ProfileCard.Inner>
        </ProfileCard>
    )
}

export const SubProfileCard = () => {
    return (
        <ProfileCard>
            <ProfileCard.Inner2 >
                <ProfileCard.Block>
                    <HeyHuman />
                </ProfileCard.Block>
                <ProfileCard.Block>
                    <ProfileCard.Text style={{ fontSize: '50px', fontWeight: '600', letterSpacing: '0.13em', lineHeight: '75px' }}>
                        LET ME INTRODUCE MY SELF
                </ProfileCard.Text>
                    <ProfileCard.Text style={{ fontSize: '25px', fontWeight: 'normal', lineHeight: '150%' }}>
                        I am an experienced programmer, freelancer with a demonstrated history of working in the computer software industry. Skilled in Java (Programming Language) and realated advanced technologies.
                </ProfileCard.Text>
                    <ProfileCard.Text style={{ fontSize: '25px', fontWeight: '500', lineHeight: '150%' }}>
                        JAVA | SPRING | SPRING BOOT | MICRO SERVICES | REACT JS
                </ProfileCard.Text>
                    <ProfileCard.Button>
                        <a href="https://www.linkedin.com/in/vishal-paalakurthi-11481a8a">
                            Download CV
                        </a>
                    </ProfileCard.Button>
                </ProfileCard.Block>
            </ProfileCard.Inner2>
        </ProfileCard>
    )
}