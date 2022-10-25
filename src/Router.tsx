import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/defaultLayout'
import { BlogProfile } from './pages/blogProfile'
import { Post } from './pages/post'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<BlogProfile />} />
        <Route path="/issue/:number" element={<Post />} />
      </Route>
    </Routes>
  )
}
