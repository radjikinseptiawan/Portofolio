import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ProfilePage from './pages/profilePage.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css'

const route = createBrowserRouter([{
  path:'/',
  element:<ProfilePage/>
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>,
)
