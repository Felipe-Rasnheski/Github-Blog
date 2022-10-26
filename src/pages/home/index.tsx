import githubBlog from '../../assets/githubBlog.svg'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <header>
        <img src={githubBlog} alt="" />
      </header>
    </HomeContainer>
  )
}
