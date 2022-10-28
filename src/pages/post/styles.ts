import styled from 'styled-components'

export const PostIssue = styled.div`
  max-width: 86.4rem;
  margin: 0 auto;
  margin-top: -9.4rem;

  .issueHeader {
    padding: 3.2rem;
    background: ${(props) => props.theme['base-profile']};
    position: relative;

    border-radius: 10px;

    span {
      display: flex;
      justify-content: space-between;
      align-items: center;

      a {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 0.8rem;

        color: ${(props) => props.theme.blue};
        font-size: 1.2rem;
        font-weight: 700;
        line-height: 160%;
        text-decoration: none;

        &:hover,
        svg,
        img {
          text-decoration: underline;
          cursor: pointer;
        }
      }

      img {
        height: 1.2rem;
        width: 1.2rem;
      }
    }

    h1 {
      font-size: 2.4rem;
      font-weight: 700;
      line-height: 160%;
      color: ${(props) => props.theme['base-title']};
      margin: 2rem 0 1rem 0;

      &:hover {
        cursor: pointer;
      }
    }

    & > div {
      display: flex;

      span {
        display: flex;
        align-items: center;
        margin-right: 3.2rem;

        font-size: 1.6rem;
        line-height: 0%;
        color: ${(props) => props.theme['base-span']};

        &:hover {
          cursor: default;
        }
      }

      img {
        height: 1.8rem;
        width: 1.8rem;
        margin-right: 0.8rem;
      }
    }
  }

  .issueBody {
    padding: 4rem 3.2rem;
    font-size: 1.6rem;
    line-height: 160%;
    margin-bottom: 5rem;

    &:hover {
      cursor: default;
    }

    a {
      color: ${(props) => props.theme.blue};
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    pre {
      padding: 1rem;
      background: ${(props) => props.theme['base-post']};
      color: ${(props) => props.theme['base-title']};
      margin-top: 1.5rem;
      border-radius: 2px;

      & > code {
        padding: none;
        border: none;
        background: transparent;
      }
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

    p + h3,
    p + h2,
    p + h1 {
      margin-top: 0.8rem;
    }

    p + p {
      margin-top: 1rem;
    }

    ol,
    li {
      padding: 1rem 0;

      &::marker {
        color: ${(props) => props.theme.blue};
      }
    }
  }
`
