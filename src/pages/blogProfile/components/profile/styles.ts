import styled from 'styled-components'

export const ProfileContent = styled.div`
  background: ${(props) => props.theme['base-profile']};
  position: relative;
  border-radius: 10px;
  padding: 3.2rem;

  display: flex;
  gap: 3.2rem;

  img {
    margin-left: 0.8rem;
    max-width: 14.8rem;
    max-height: 14.8rem;
    border-radius: 8px;
  }

  & > div {
    flex: 1;
  }

  header {
    font-weight: 700;
    display: flex;
    justify-content: space-between;
    align-items: center;

    strong {
      line-height: 160%;
      color: ${(props) => props.theme['base-title']};
      font-size: 2.4rem;
    }

    a {
      font-size: 1.2rem;
      font-weight: 700;
      text-decoration: none;
      color: ${(props) => props.theme.blue};
      height: fit-content;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.8rem;
      line-height: 0;
      border-bottom: 1px solid transparent;

      &:hover {
        border-bottom: 1px solid ${(props) => props.theme.blue};
      }
    }
  }

  p {
    font-size: 1.6rem;
    line-height: 160%;
    margin: 0.8rem 0 2.4rem 0;
  }

  footer {
    display: flex;
    flex-direction: row;
    gap: 2.4rem;

    span {
      color: ${(props) => props.theme['base-subtitle']};
      font-size: 1.6rem;
      line-height: 100%;

      display: flex;
      justify-content: center;
      align-items: center;

      img {
        height: 1.8rem;
        width: 1.8rem;
        margin: 0 0.8rem 0rem 0;
      }
    }
  }
`
