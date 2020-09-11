import React from 'react';
import NavLink from 'next/link';
import Icon from 'react-icons-kit';
import { arrowRight } from 'react-icons-kit/feather';
import { RecentArticles } from "../assets/metadata/Metadata";


export default () => {
    return (
        <>
            <div class="gridWrapper">
                <div className="secHeader">
                    <h3>Articles</h3>
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
        </>
    )
}