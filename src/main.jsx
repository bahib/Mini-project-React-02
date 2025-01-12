import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, Link, Links, RouterProvider } from 'react-router-dom'
import Article from './Article.jsx'
import PageErreur from './PageErreur.jsx'

const route = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <PageErreur />
    },
    {
      path: "apropos",
      element: <>
      <h1>A propos</h1>
      <p>Ceci est un fragment React.</p>
      <Link to={"/"}>Retour à la page principale</Link>
      </>
    },
    {
      path: "/blog",
      element: (
        <>
      <h1>Liste des articles</h1>
      <p>Article 11.</p>
      <Link to={"/blog/200"}>Article 11.</Link>
      {/* <Link to={"/"}>Retour à la page principale</Link> */}
      </>
      )
    },
    {
      path: "/blog/:id",
      element: <Article />
    }
  ]
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router= {route} />
  </StrictMode>,
)
