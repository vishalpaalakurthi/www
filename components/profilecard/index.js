import ProfileCard from './elements';
import Social from '../Social';
export default () => {
    return (
        <ProfileCard>
            <ProfileCard.Title>
                Vishal Paalakurthi
            </ProfileCard.Title>
            <ProfileCard.SubTitle>
                Developer | Freelancer | Product Development
            </ProfileCard.SubTitle>
            <ProfileCard.Social>
                <Social size={20} />
            </ProfileCard.Social>
        </ProfileCard>
    )
}