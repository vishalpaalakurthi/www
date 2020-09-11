import styled from 'styled-components'

export const HeadPost = ({ meta, isBlogPost }) => (
  <Wrapper>
    <h1 className="title" >{meta.title}</h1>
    <div className='details'>
    {
        isBlogPost? null: <p>{meta.description}</p>
    }  
      <span>{meta.date}</span>
      <span role='img' aria-label='one coffee'>
          {meta.readTime + ' min read'}
      </span>
    </div> 
    <style jsx="true">{`
        .title {
            font-weight: 700;
            font-size: 30px;
        }
        .details {
            font-weight: 400;
            font-size: 15px;
        }
        span {
            margin: 0px 10px;
        }
    `}</style>
  </Wrapper>
)

const Wrapper = styled.header`
    display: flex;
    margin: 20px 0px;
    padding: 40px 0px;
    flex-direction: column;
    border-bottom: 1px solid #eaeaea;
`;
