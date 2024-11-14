import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Route from "./pages/Route"
import HomePage from "./pages/HomePage"
import SearchPage from "./pages/search/SearchPage"
import DeatailsPage from "./pages/DetailsPage"
import { SearchLoader } from "./pages/search/SearchLoader"

function App() {

  const router = createBrowserRouter([
    {
      path : '/',
      element: <Route/>,
      children: [
        {
          index: true,
          element: <HomePage />
        },
        {
          path: '/search',
          element : <SearchPage />,
          loader: SearchLoader,
        },{
          path : '/packages/:name',
          element: <DeatailsPage />
        }
      ]
    }
  ])
return <div>
  <RouterProvider router={router} />
</div>
}

export default App
