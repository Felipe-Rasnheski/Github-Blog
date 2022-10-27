import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import githubBlog from '../../assets/githubBlog.svg'
import { Issues } from './components/issues'
import { HomeContainer } from './styles'

export function Home() {
  const [issues, setIssues] = useState<any>({})

  const fetchFollowing = useCallback(async () => {
    const response = await axios.get(
      'https://api.github.com/users/Felipe-Rasnheski/following',
    )

    async function test(tes: any) {
      const index = Math.ceil(Math.random() * tes.length)

      const { login } = tes[index]

      const response = await axios.get(
        `https://api.github.com/users/${login}/repos`,
      )

      const index2 = Math.ceil(Math.random() * response.data.length)

      const { name: repoName, has_issues: hasIssues } = response.data[index2]

      if (hasIssues) {
        const response2 = await axios.get(
          `https://api.github.com/repos/${login}/${repoName}/issues`,
        )

        const index3 = Math.ceil(Math.random() * response2.data.length)

        setIssues(response2.data[index3])
      }
    }

    test(response.data)
  }, [])

  console.log(issues)

  useEffect(() => {
    fetchFollowing()
  }, [fetchFollowing])

  return (
    <HomeContainer>
      <header>
        <img src={githubBlog} alt="" />
      </header>
      <div className="feedContainer">
        <Issues></Issues>
      </div>
    </HomeContainer>
  )
}
