import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import BanjuloLandingPage from './components/BanjuloLandingPage.jsx.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <BanjuloLandingPage />,
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    <BanjuloLandingPage />
    </RouterProvider>
  </StrictMode>,
)
