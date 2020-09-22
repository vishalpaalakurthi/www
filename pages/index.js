import Head from 'next/head'
import styled from 'styled-components';
import Social from '../components/Social';
import NavLink from 'next/link';
import Icon from 'react-icons-kit';
import { arrowRight } from 'react-icons-kit/feather';
import { RecentArticles } from "../assets/metadata/Metadata";

export default () => {
    return (
        <>
            <ProfileWrapper>
                <Header>
                    <h1>Vishal Paalakurthi</h1>
                    <p>Developer | Freelancer | Product Development</p>
                    <Social />
                </Header>
            </ProfileWrapper>
            <div class="gridWrapper">
                <div className="secHeader">
                    <h3>Recent Published</h3>
                    <NavLink href="/blog">
                        <a>
                            <p>View all</p>
                        </a>
                    </NavLink>
                </div>
                <div className="secBody">

                    {RecentArticles.length === 0 ? <></>
                        :
                        RecentArticles.map( (article, index) => {
                        return (<div className="overview">
                            <div className="overviewBody">
                                <h4 style={{ opacity: '0.8', fontWeight: '500' }}>{article.title}</h4>
                                <h5 style={{ opacity: '0.8', fontWeight: '400' }}>{article.shortNote}</h5>
                                <div style={{ textAlign: 'left' }}>
                                    <NavLink href={article.path}>
                                    <a> <Icon icon={arrowRight} /></a>
                                    </NavLink>
                                </div>
                            </div>
                        </div>)
                        } )
                    }
                </div>
            </div>
            <div class="gridWrapper" id="projects">
                <div className="secHeader">
                    <h3>Projects</h3>
                </div>
                <div className="secBody">
                    <div className="overview">
                        <div className="overviewBody">
                            <h4 style={{ opacity: '0.8', fontWeight: '500' }}>Project Name</h4>
                            <h5 style={{ opacity: '0.8', fontWeight: '400' }}>
                                {'This product is a windows menu bar application which helps to boost the productivity'}
                            </h5>
                            <div style={{ textAlign: 'left' }}>
                                <a> <Icon icon={arrowRight} /> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="gridWrapper" id="contactus">
                <div className="secHeader">
                    <h3>Contact Us</h3>
                </div>
                <div className="secBody">
                    <div className="overview">
                        <div className="overviewBody" style={{background:'transparent', border:'none', boxShadow: 'none'}}>
                            <h4 style={{ opacity: '0.8', fontWeight: '400' }}>
                                {'Feel free to reach out if you are looking for a developer. if you have any request or question, don’t hesitate to contact me .'}
                            </h4>
                            <div style={{ textAlign: 'left' }}>
                                <a href="mailto: vishalpaalakurthi@gmail.com"> <p style={{textDecorationLine: 'underline'}}> vishalpaalakurthi@gmail.com </p> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const Header = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;

`;
const ProfileWrapper = styled.header`
    display: flex;
    height: auto;
    width: 100%;
    border-radius: 15px;
    padding: 0px 10px; 
    margin: 40px;  
`;

const Bucket = styled.div`
    position: absolute;
    background: yellow;
    padding: 10px 15px;
    width: 30px;
    z-index: -1;
    opacity: 0.8;
`;
