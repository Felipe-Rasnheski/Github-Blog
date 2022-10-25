import { useContext } from 'react'
import ReactMarkdown from 'react-markdown'
import { NavLink } from 'react-router-dom'
import rehypeRaw from 'rehype-raw'
import { v4 as uuidv4 } from 'uuid'
import { IssuesByRepositoryContext } from '../../../../context/IssuesByRepositoryContext'
import { dataFormatter } from '../../../../utils/formatter'
import { IssuesContainer } from './styles'

export function Issues() {
  const { issues } = useContext(IssuesByRepositoryContext)

  return (
    <IssuesContainer className={issues.length === 0 ? 'test' : 'tets'}>
      {issues.map((issue) => {
        const { number } = issue
        return (
          <div key={uuidv4()}>
            <div className="headerIssue">
              <NavLink to={`/issue/${number}`}>
                <h2>{issue.title}</h2>
              </NavLink>
              <span>{dataFormatter.format(new Date(issue.createdAt))}</span>
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
