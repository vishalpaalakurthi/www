import BlogPost from './elements';

export default function BLogPostContainer ({children, meta}) {
    return (
        <BlogPost>
            <BlogPost.Header>
                <BlogPost.Title>
                    {meta.title}
                </BlogPost.Title>
                <BlogPost.SubHeader>
                    <BlogPost.TextItem>{meta.date}</BlogPost.TextItem>
                    <BlogPost.TextItem>{'Read time - '}{meta.readTime}{' mins'}</BlogPost.TextItem>
                </BlogPost.SubHeader>
            </BlogPost.Header>
            <BlogPost.Body>
                <BlogPost.Article>
                    {children}
                </BlogPost.Article>
            </BlogPost.Body>
        </BlogPost>
    )
}