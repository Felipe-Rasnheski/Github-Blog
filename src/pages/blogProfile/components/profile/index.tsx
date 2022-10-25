import { ArrowSquareOut } from 'phosphor-react'
import { useContext } from 'react'
import building from '../../../../assets/building.svg'
import gitHub from '../../../../assets/gitHub.svg'
import userGroup from '../../../../assets/userGroup.svg'
import { InfoProfileContext } from '../../../../context/InfoProfileContext'
import { ProfileContent } from './styles'

export function Profile() {
  const { infoProfile } = useContext(InfoProfileContext)

  return (
    <ProfileContent>
      <img src={infoProfile.avatarUrl} alt="" />
      <div>
        <header>
          <strong>{infoProfile.name}</strong>
          <a href={infoProfile.htmlUrl}>
            GITHUB <ArrowSquareOut size={14} />
          </a>
        </header>
        <p>{infoProfile.bio}</p>
        <footer>
          <span>
            <img src={gitHub} alt="" />
            {infoProfile.login}
          </span>

          {infoProfile.company && (
            <span>
              <img src={building} alt="" />
              {infoProfile.company}
            </span>
          )}

          <span>
            <img src={userGroup} alt="" />
            {infoProfile.followers} seguidores
          </span>
        </footer>
      </div>
    </ProfileContent>
  )
}
