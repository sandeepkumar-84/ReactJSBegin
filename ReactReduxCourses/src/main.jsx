import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Route, createBrowserRouter, RouterProvider,createRoutesFromElements} from 'react-router-dom'
import HomePage from './Components/Home/HomePage.jsx'
import AboutPage from './Components/About/AboutPage.jsx'
import Layout from './Layout.jsx'
import CoursePage from './Components/Courses/CoursePage.jsx'
import { Provider } from "react-redux";
import store from "./Redux/configureStore";

const router = createBrowserRouter(
  createRoutesFromElements
  (
    <Route path='/' element={<Layout/>}>
      <Route path='/' element={<HomePage/>}/>
      <Route path='about' element={<AboutPage/>}/>
      <Route path='courses' element={<CoursePage/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(

  <StrictMode>
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>  
  </StrictMode>,

  

)
