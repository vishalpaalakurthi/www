import Head from 'next/head'
import styled from 'styled-components';
import Social from '../components/Social';
import NavLink from 'next/link';
import Icon from 'react-icons-kit';
import { arrowRight } from 'react-icons-kit/feather';
import { RecentArticles } from "../assets/metadata/Metadata";

export default () => {
    debugger;
    return (
        <>
            <ProfileWrapper>
                <Header>
                    <h1>Vishal Paalakurthi</h1>
                    <p>Developer | Freelancer | Product Development</p>
                    <Social />
                </Header>
            </ProfileWrapper>
            <BlogWrapper>
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
                        return (<Overview>
                            <div className="overviewBody">
                                <h4 style={{ opacity: '0.8', fontWeight: '500' }}>{article.title}</h4>
                                <h5 style={{ opacity: '0.8', fontWeight: '400' }}>{article.shortNote}</h5>
                                <div style={{ textAlign: 'left' }}>
                                    <NavLink href={article.path}>
                                    <a> <Icon icon={arrowRight} /></a>
                                    </NavLink>
                                </div>
                            </div>
                        </Overview>)
                        } )
                    }
                </div>
            </BlogWrapper>
            <ProjectWrapper id="projects">
                <div className="secHeader">
                    <h3>Projects</h3>
                    <NavLink href="">
                        <a>
                            <p>View all</p>
                        </a>
                    </NavLink>
                </div>
                <div className="secBody">
                    <Overview>
                        <div className="overviewBody">
                            <h4 style={{ opacity: '0.8', fontWeight: '500' }}>Project Name</h4>
                            <h5 style={{ opacity: '0.8', fontWeight: '400' }}>
                                {'This product is a windows menu bar application which helps to boost the productivity'}
                            </h5>
                            <div style={{ textAlign: 'left' }}>
                                <a> <Icon icon={arrowRight} /> </a>
                            </div>
                        </div>
                    </Overview>
                </div>
            </ProjectWrapper>
            <style jsx="true">{`
                .secHeader {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin: 20px 5px;
                }
                .secBody {
                    display: flex;
                    height: auto;
                    flex-wrap: wrap;
                    padding: 0px;
                    margin: 0px;
                }
                .overviewBody {
                    flex-direction: column;
                    margin: 10px 5px;
                    background: transparent;
                    flex:1;
                    border-radius: 5px;
                    padding: 5px;
                }
            `}</style>
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

const BlogWrapper = styled.section`
    display: flex;
    height: auto;
    border-radius: 15px;
    flex-direction: column;
    margin: 40px;  
`;

const ProjectWrapper = styled.section`
    display: flex;
    height: auto;
    border-radius: 5px;
    flex-direction: column;
    margin: 40px;  
`;

const Overview = styled.div`
    display: flex;
    min-height: 100px;
    height: auto;
    border-radius: 1px solid black;
    width: 50%;
`;

const Bucket = styled.div`
    position: absolute;
    background: yellow;
    padding: 10px 15px;
    width: 30px;
    z-index: -1;
    opacity: 0.8;
`;
