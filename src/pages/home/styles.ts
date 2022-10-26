import styled from 'styled-components'

export const HomeContainer = styled.main`
  header {
    background: ${(props) => props.theme['base-profile']};
    padding: 2rem 0;

    display: flex;
    justify-content: center;

    img {
      height: 6rem;
      width: 6rem;
    }
  }
`
