import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider, Route, Outlet } from 'react-router-dom';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { Navbar } from './component/Navbar';
import { Home } from './pages/Home';
import { Footer } from './component/Footer';
import { Single } from './pages/Single';
import { Write } from './pages/Write';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}


const router = createBrowserRouter([
  {
    // path:'/',
    // element:<div>
    //   <Navbar/>
    //   <Home/>
    //   <Footer/>
    // </div>
    path: '/',
    element: <Layout/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },{
        path:'/post/:id',
        element:<Single/>
      },{
        path:'/write',
        element:<Write/>
      }
    ]
  }, {
    path: '/register',
    element: <Register />
  }, {
    path: '/login',
    element: <Login />
  }
])
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
