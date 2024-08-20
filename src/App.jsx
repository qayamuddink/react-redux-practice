import React from 'react'
import { Link } from 'react-router-dom'
import Home from './componets/Home';
import Products from './componets/Products';
import Users from './componets/Users'
import { Routes ,Route } from 'react-router-dom';

export const App = () => {
  return (
    <div className='w-screen h-screen'>
      <nav className='py-5 flex justify-center gap-5'>
        <Link to='/Home'>Home</Link>
        <Link to='/Users'>Users</Link>
        <Link to='Products'>Product</Link>
      </nav>
      <hr />
      <Routes>
          <Route path='/Home' element={<Home /> } />
          <Route path='/Users' element={<Users /> } />
          <Route path='/Products' element={<Products /> } />
      </Routes>
    </div>
  )
}

export default App;
