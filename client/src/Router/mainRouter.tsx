import {createBrowserRouter} from "react-router-dom"
import Layout from "../components/common/Layout"
import HomeSceen from "../Pages/HomeSceen"
 export const mainRouter = createBrowserRouter([
       {
              path:"/",
              element: <Layout/>,
              children:[{
                     index: true,
                     element: <HomeSceen/>, 
              }]
           
       }
 ])