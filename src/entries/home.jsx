import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router'
import '../index.css'
import Home from '../pages/Home.jsx'
import LocalLlmTutorial from '../pages/LocalLlmTutorial.jsx'

const router = createHashRouter([
  {
    path: '/',
    element: <Home />,
  },

  {
    path: '/local-llm-tutorial',
    element: <LocalLlmTutorial />,
  },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
