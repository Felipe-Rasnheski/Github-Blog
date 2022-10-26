import styled from 'styled-components'

export const IssuesContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3.2rem;
  margin: 4.8rem 0;

  .test {
    height: 100vh;
  }

  & > div {
    padding: 3.2rem;
    max-height: 26rem;
    border-radius: 10px;
    background: ${(props) => props.theme['base-post']};
  }

  .headerIssue {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.5rem;

    a {
      text-decoration: none;

      h2 {
        &:hover {
          color: ${(props) => props.theme['base-subtitle']};
          text-decoration: underline;
        }
      }
    }

    h2 {
      font-size: 2rem;
      font-weight: 700;
      line-height: 160%;
      color: ${(props) => props.theme['base-title']};
    }

    span {
      font-size: 1.4rem;
      line-height: 160%;
      height: fit-content;
      color: ${(props) => props.theme['base-span']};
    }
  }

  .issueBody {
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;
    font-size: 1.6rem;
    line-height: 160%;

    a {
      color: ${(props) => props.theme.blue};
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    pre {
      padding: 1rem;
      background: ${(props) => props.theme['base-border']};
      color: ${(props) => props.theme['base-title']};
    }

    code {
      padding: 0.3rem;
      border-radius: 5px;
      background: ${(props) => props.theme['base-border']};
      color: ${(props) => props.theme['base-title']};
    }

    h1 {
      margin-bottom: 1rem;
      color: ${(props) => props.theme['base-title']};
    }

    h2,
    h3 {
      margin-bottom: 0.8rem;
      color: ${(props) => props.theme['base-subtitle']};
    }

    p + p {
      margin-top: 1rem;
    }
  }
`
