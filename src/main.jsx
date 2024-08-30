import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ProfilePage from './pages/profilePage.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css'
import EducationPage from './pages/educationPage.jsx'
const route = createBrowserRouter([{
  path:'/',
  element:<ProfilePage/>
},{
  path:'/education',
  element:<EducationPage></EducationPage>
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>,
)
