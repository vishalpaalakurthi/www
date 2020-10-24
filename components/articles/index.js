import Articles from "./elements";
import NavLink from 'next/link';
import Icon from 'react-icons-kit';
import { arrowRight } from 'react-icons-kit/feather';
import { Articles as ArticlesData } from "../../assets/metadata/Metadata";

export default ({limit, title}) => {
    let data_articles = ArticlesData.length === 0 ? [] : limit ? ArticlesData.slice(0,limit) : ArticlesData;
    return (
        <Articles>
            <Articles.PrimaryTitle>{title}</Articles.PrimaryTitle>
            <Articles.ArticlesBody>
                {data_articles.length === 0 
                    ? <Articles.Message> I am currently exploring on awesome topics </Articles.Message>
                    :
                    data_articles.map((article, index) =>
                        (
                            <Articles.Article key={index}>
                                <Articles.Title> {article.title} </Articles.Title>
                                <Articles.SubTitle> {article.shortNote} </Articles.SubTitle>
                                <Articles.Navigation>
                                    <NavLink href={article.path}>
                                        <a> {'read more '} <Icon icon={arrowRight} /></a>
                                    </NavLink>
                                </Articles.Navigation>
                            </Articles.Article>
                        )
                    )
                }
            </Articles.ArticlesBody>
        </Articles>
    )
}