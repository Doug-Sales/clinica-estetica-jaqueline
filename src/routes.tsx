import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { NotFound } from './pages/app/404'
import { AboutJaquelineRocha } from './pages/app/about-me-jaqueline'
import { BodyEstetic } from './pages/app/body/body-estetic'
import { Facial } from './pages/app/facial-estetic/facial-page'
import { Home } from './pages/app/home/home'
import { Treatment } from './pages/app/treatment/about-treatment'
import { Trichology } from './pages/app/trichology/trichology'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/estetica-facial', element: <Facial /> },
      { path: '/estetica-corporal', element: <BodyEstetic /> },
      { path: '/tricologia', element: <Trichology /> },
      { path: '/jaqueline-rocha', element: <AboutJaquelineRocha /> },
      { path: '/tratamento', element: <Treatment /> },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
