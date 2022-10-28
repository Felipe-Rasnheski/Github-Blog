import { IssueContainer } from './styles'

export function Issues({ issue }: any) {
  console.log(issue)
  return (
    <IssueContainer>
      <div>
        {/* <img src={issue.user && issue.user.avatar_url} alt="" />
        <a href="">{issue.user && issue.user?.login}</a> */}
      </div>
    </IssueContainer>
  )
}
