import axios from 'axios'
import { createContext, ReactNode, useEffect, useState } from 'react'

interface InfoProfileProps {
  login: string
  name: string
  followers: number
  bio: string
  company: string
  avatarUrl: string
  htmlUrl: string
  followingUrl: string
}

interface InfoProfileContextType {
  infoProfile: InfoProfileProps
}

interface InfoProfileProviderProps {
  children: ReactNode
}

export const InfoProfileContext = createContext({} as InfoProfileContextType)

export function InfoProfileProvider({ children }: InfoProfileProviderProps) {
  const [infoProfile, setInfoProfile] = useState({} as InfoProfileProps)

  async function fetchUserInfo() {
    const response = await axios.get(
      'https://api.github.com/users/Felipe-Rasnheski',
    )

    const {
      login,
      name,
      followers,
      bio,
      company,
      avatar_url: avatarUrl,
      html_url: htmlUrl,
      following_url: followingUrl,
    } = response.data

    setInfoProfile({
      login,
      name,
      avatarUrl,
      followers,
      bio,
      company,
      htmlUrl,
      followingUrl,
    })
  }

  useEffect(() => {
    fetchUserInfo()
  }, [])

  return (
    <InfoProfileContext.Provider value={{ infoProfile }}>
      {children}
    </InfoProfileContext.Provider>
  )
}
