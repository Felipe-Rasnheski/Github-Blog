import styled from 'styled-components'

export const IssuesSearchFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 6.2rem;

  label {
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 160%;
    color: ${(props) => props.theme['base-subtitle']};

    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      font-size: 1.4rem;
      font-weight: 400;
      color: ${(props) => props.theme['base-span']};
    }
  }

  input {
    font-size: 1.6rem;
    padding: 1.2rem 1.6rem;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['base-border']};
    background: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-label']};

    &:focus {
      border: 1px solid ${(props) => props.theme.blue};
      box-shadow: none;
      color: ${(props) => props.theme['base-title']};
    }
  }
`
