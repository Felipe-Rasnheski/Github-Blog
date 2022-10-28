import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import githubBlog from '../../assets/githubBlog.svg'
import { Issues } from './components/issues'
import { HomeContainer } from './styles'

export function Home() {
  const [issues, setIssues] = useState<any>({})
  const [usersFollowing, setUsersFollowing] = useState([])

  function getUsersFollowingRepositories() {
    const usersInfo = usersFollowing.map(async (user) => {
      const response = await axios.get(
        `https://api.github.com/users/${user}/repos`,
      )

      return response.data
    })
  }

  const test = useCallback(async (usersFollowing: string[]) => {
    const index = Math.ceil(Math.random() * usersFollowing.length)

    const response = await axios.get(
      `https://api.github.com/users/${usersFollowing[index]}/repos`,
    )

    const index2 = Math.ceil(Math.random() * response.data.length)

    const { name: repoName, has_issues: hasIssues } = response.data[index2]

    if (hasIssues) {
      const response2 = await axios.get(
        `https://api.github.com/repos/${usersFollowing[index]}/${repoName}/issues`,
      )

      const index3 = Math.ceil(Math.random() * response2.data.length)

      setIssues(response2.data[index3])
    }
  }, [])

  const fetchFollowing = useCallback(async () => {
    const response = await axios.get(
      'https://api.github.com/users/Felipe-Rasnheski/following',
    )

    const usersFollowing = response.data.map((user: any) => user.login)

    setUsersFollowing(usersFollowing)
  }, [setUsersFollowing])

  useEffect(() => {
    fetchFollowing()
  }, [fetchFollowing])

  return (
    <HomeContainer>
      <header>
        <img src={githubBlog} alt="" />
      </header>
      <div className="feedContainer">
        <Issues issue={issues}></Issues>
      </div>
    </HomeContainer>
  )
}
