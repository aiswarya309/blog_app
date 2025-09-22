import logo from './logo.svg';
import { createBrowserRouter, RouterProvider, Route, Outlet } from 'react-router-dom';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { Navbar } from './component/Navbar';
import { Home } from './pages/Home';
import { Footer } from './component/Footer';
import { Single } from './pages/Single';
import { Write } from './pages/Write';
import './style.scss';

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
    <div className='app'>
      <div className='container'>
      <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
