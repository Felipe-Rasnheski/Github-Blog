import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { IssuesByRepositoryContext } from '../../../../context/IssuesByRepositoryContext'
import { IssuesSearchFormContainer } from './styles'

const searchFormSchema = zod.object({
  query: zod.string(),
})

type SearchFormInputs = zod.infer<typeof searchFormSchema>

export function IssuesSearchForm() {
  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  const { fetchIssues } = useContext(IssuesByRepositoryContext)

  async function handleSearchIssues(data: SearchFormInputs) {
    await fetchIssues(data.query)
  }

  return (
    <IssuesSearchFormContainer
      onSubmit={(e) => e.preventDefault()}
      onChange={handleSubmit(handleSearchIssues)}
    >
      <label htmlFor="search">
        Publicações <span>{} publicações</span>
      </label>
      <input
        type="text"
        id="search"
        placeholder="Buscar Issues"
        {...register('query')}
      />
    </IssuesSearchFormContainer>
  )
}
