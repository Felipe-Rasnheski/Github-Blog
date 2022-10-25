import axios from 'axios'
import { ArrowSquareOut } from 'phosphor-react'
import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import calendar from '../../assets/calendar.svg'
import chevron from '../../assets/chevron.svg'
import comments from '../../assets/comments.svg'
import gitHub from '../../assets/gitHub.svg'
import { dataFormatter } from '../../utils/formatter'
import { PostIssue } from './styles'

interface IssueProps {
  title: string
  comments: number
  body: string
  createdAt: string
  htmlUrl: string
  login: string
}

export function Post() {
  const [issue, setIssue] = useState({} as IssueProps)

  const { number } = useParams()

  const fetchIssueInfo = useCallback(async () => {
    const response = await axios.get(
      `https://api.github.com/repos/Felipe-Rasnheski/Github-blog/issues/${number}`,
    )

    const {
      title,
      comments,
      body,
      created_at: createdAt,
      html_url: htmlUrl,
    } = response.data

    const { login } = response.data.user

    setIssue({ title, comments, body, createdAt, htmlUrl, login })
  }, [number])

  useEffect(() => {
    fetchIssueInfo()
  }, [fetchIssueInfo])

  return (
    <PostIssue>
      <header>
        <span>
          <a href="">
            <img src={chevron} alt="" /> Voltar
          </a>
          <a href={issue.htmlUrl}>
            VER NO GITHUB <ArrowSquareOut size={14} />
          </a>
        </span>
        <h1>{issue.title}</h1>
        <div>
          <span>
            <img src={gitHub} alt="" />
            {issue.login}
          </span>
          <span>
            <img src={calendar} alt="" />
            {dataFormatter.format(new Date(issue.createdAt))}
          </span>
          <span>
            <img src={comments} alt="" />
            {issue.comments} comentários
          </span>
        </div>
      </header>
      <div></div>
    </PostIssue>
  )
}
