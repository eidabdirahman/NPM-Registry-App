import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Route from "./pages/Route"
import HomePage from "./pages/home/HomePage"
import { homeLoader } from "./pages/home/HomeLoader"
import SearchPage from "./pages/search/SearchPage"
import DeatailsPage from "./pages/details/DetailsPage"
import { SearchLoader } from "./pages/search/SearchLoader"
import DetailsLoader from "./pages/details/DetailsLoader"

function App() {

  const router = createBrowserRouter([
    {
      path : '/',
      element: <Route/>,
      children: [
        {
          index: true,
          element: <HomePage />,
          loader: homeLoader
        },
        {
          path: '/search',
          element : <SearchPage />,
          loader: SearchLoader,
        },{
          path : '/packages/:name',
          element: <DeatailsPage />,
          loader: DetailsLoader
        }
      ]
    }
  ])
return <div>
  <RouterProvider router={router} />
</div>
}

export default App
