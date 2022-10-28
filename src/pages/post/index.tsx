import axios from 'axios'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { ArrowSquareOut } from 'phosphor-react'
import { useCallback, useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { NavLink, useParams } from 'react-router-dom'
import rehypeRaw from 'rehype-raw'
import calendar from '../../assets/calendar.svg'
import chevron from '../../assets/chevron.svg'
import Comments from '../../assets/comments.svg'
import gitHub from '../../assets/gitHub.svg'
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

  const { title, comments, createdAt, body, htmlUrl, login } = issue

  return (
    <PostIssue>
      <div className="issueHeader">
        <span>
          <NavLink to="/">
            <img src={chevron} alt="" /> VOLTAR
          </NavLink>
          <a href={htmlUrl}>
            VER NO GITHUB <ArrowSquareOut size={14} />
          </a>
        </span>
        <h1>{title}</h1>
        <div>
          <span>
            <img src={gitHub} alt="" />
            {login}
          </span>
          <span>
            <img src={calendar} alt="" />
            {createdAt &&
              formatDistanceToNow(new Date(createdAt), {
                addSuffix: true,
                locale: ptBR,
              })}
          </span>
          <span>
            <img src={Comments} alt="" />
            {comments} comentários
          </span>
        </div>
      </div>
      <div className="issueBody">
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{body}</ReactMarkdown>
      </div>
    </PostIssue>
  )
}
