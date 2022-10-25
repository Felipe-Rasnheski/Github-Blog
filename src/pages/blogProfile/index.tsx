import { IssuesByRepositoryProvider } from '../../context/IssuesByRepositoryContext'
import { Issues } from './components/issues'
import { IssuesSearchForm } from './components/issuesSearch'
import { Profile } from './components/profile'
import { ProfileContainer } from './styles'

export function BlogProfile() {
  return (
    <ProfileContainer>
      <Profile />
      <IssuesByRepositoryProvider>
        <IssuesSearchForm />
        <Issues />
      </IssuesByRepositoryProvider>
    </ProfileContainer>
  )
}
