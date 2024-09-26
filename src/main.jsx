import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Layout, Home, About, MissionAndVision, HowItWorks, Contact } from './components'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/mission-and-vision",
        element: <MissionAndVision />
      },
      {
        path: "how-it-works",
        element: <HowItWorks />
      },
      {
        path: "contact",
        element: <Contact />
      },
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode >,
)
