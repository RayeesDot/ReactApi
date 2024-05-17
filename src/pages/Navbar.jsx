import React from 'react'
import { Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
       <nav className='bg-black'>
         <ul className='d-flex'>
            <li>
              <Link to="/" className='color-white text-decoration-none'>Form</Link>
            </li>
            <li>
              <Link to="/Form-useContext" className='color-white text-decoration-none'>Form-useContext</Link>
            </li>
            <li>
              <Link to="/DisplayForm-useContext" className='color-white text-decoration-none'>DisplayForm-useContext</Link>
            </li>
            <li>
              <Link to="/about" className='color-white text-decoration-none'>About</Link>
            </li>
            <li>
              <Link to ="/main" className='color-white text-decoration-none'>Main</Link>
            </li>
            <li>
              <Link to ="/anyFile" className='color-white text-decoration-none'>AnyFile</Link>
            </li>
            <li>
              <Link to ="/fetchApi" className='color-white text-decoration-none'>FetchApi</Link>
            </li>
            <li>
              <Link to ="/TaskkApi" className='color-white text-decoration-none'>TaskApi</Link>
            </li>
            <li>
              <Link to ="/Taskkcard" className='color-white text-decoration-none'>TaskCard</Link>
            </li>
          </ul>
        </nav>
    </div>
  )
}

export default Navbar
