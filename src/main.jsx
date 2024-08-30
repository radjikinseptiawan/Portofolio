import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ProfilePage from './pages/profilePage.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css'
import EducationPage from './pages/educationPage.jsx'
import ExperiencePage from './pages/experiencePage.jsx'
import TechnicalSkillPage from './pages/technicalSkillPage.jsx'

const route = createBrowserRouter([{
  path:'/',
  element:<ProfilePage/>
},{
  path:'/education',
  element:<EducationPage>/</EducationPage>
},{
  path:"/experience",
  element:<ExperiencePage/>
},{
  path:"/skill",
  element:<TechnicalSkillPage/>
}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>,
)
