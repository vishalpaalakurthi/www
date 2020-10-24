import ProfileCard from './elements';
import Social from '../Social';
import HelloHuman from '../../assets/svgs/hellohuman';
export default () => {
    return (
        <ProfileCard>
            <ProfileCard.Block>
                <ProfileCard.Text style={{fontSize: '45px', fontWeight: '500'}}>
                    Hey _____________________
                </ProfileCard.Text>
                <ProfileCard.Text style={{fontSize: '70px', fontWeight: 'bold'}}>
                    I AM VISHAL 
                </ProfileCard.Text>
                <ProfileCard.Text style={{fontSize: '23px', fontWeight: '500'}}>
                    Developer | Freelancer | Product Development
                </ProfileCard.Text>
                <ProfileCard.Social>
                    <Social size={45} />
                </ProfileCard.Social>
            </ProfileCard.Block>
            <ProfileCard.Block>
                <HelloHuman />
            </ProfileCard.Block>
        </ProfileCard>
    )
}