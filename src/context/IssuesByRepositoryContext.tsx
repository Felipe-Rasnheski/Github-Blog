import axios from 'axios'
import { createContext, ReactNode, useEffect, useState } from 'react'

interface IssueProps {
  url: string
  title: string
  body: string
  number: number
  createdAt: string
  commentsUrl: string
}

interface IssuesByRepositoryContextProps {
  issues: IssueProps[]
  fetchIssues: (query: string) => Promise<void>
}

interface IssuesByRepositoryProviderProps {
  children: ReactNode
}

export const IssuesByRepositoryContext = createContext(
  {} as IssuesByRepositoryContextProps,
)

export function IssuesByRepositoryProvider({
  children,
}: IssuesByRepositoryProviderProps) {
  const [issues, setIssues] = useState<IssueProps[]>([])

  async function fetchIssues(query?: string) {
    if (query) {
      const response = await axios.get(
        `https://api.github.com/search/issues?q=${query}/repo:Felipe-Rasnheski/Github-Blog`,
      )

      const issuesInfo = response.data.items.map((issue: any) => {
        const {
          url,
          title,
          body,
          number,
          created_at: createdAt,
          comments_url: commentsUrl,
        } = issue

        return { url, title, body, number, createdAt, commentsUrl }
      })

      setIssues(issuesInfo)
    } else {
      const response = await axios.get(
        'https://api.github.com/repos/Felipe-Rasnheski/Github-Blog/issues',
      )

      const issuesInfo = response.data.map((issue: any) => {
        const {
          url,
          title,
          body,
          number,
          created_at: createdAt,
          comments_url: commentsUrl,
        } = issue

        return { url, title, body, number, createdAt, commentsUrl }
      })

      setIssues(issuesInfo)
    }
  }

  useEffect(() => {
    fetchIssues()
  }, [])

  return (
    <IssuesByRepositoryContext.Provider value={{ issues, fetchIssues }}>
      {children}
    </IssuesByRepositoryContext.Provider>
  )
}
