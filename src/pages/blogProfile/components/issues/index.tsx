import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useContext } from 'react'
import ReactMarkdown from 'react-markdown'
import { NavLink } from 'react-router-dom'
import rehypeRaw from 'rehype-raw'
import { v4 as uuidv4 } from 'uuid'
import { IssuesByRepositoryContext } from '../../../../context/IssuesByRepositoryContext'
import { IssuesContainer } from './styles'

export function Issues() {
  const { issues } = useContext(IssuesByRepositoryContext)

  return (
    <IssuesContainer>
      <div className={issues.length === 0 ? 'empty' : 'notEmpty'}></div>
      {issues.map((issue) => {
        const { number } = issue
        return (
          <div className="issueContainer" key={uuidv4()}>
            <div className="headerIssue">
              <NavLink to={`/issue/${number}`}>
                <h2>{issue.title}</h2>
              </NavLink>
              <span>
                {formatDistanceToNow(new Date(issue.createdAt), {
                  addSuffix: true,
                  locale: ptBR,
                })}
              </span>
            </div>
            <div className="issueBody">
              <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                {issue.body}
              </ReactMarkdown>
            </div>
          </div>
        )
      })}
    </IssuesContainer>
  )
}
