import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
export default function Layout() {
  return (
    <>



 <Header/>
 
  <Outlet/>
  
<Footer/>


{/* <header>header</header>
        <main>
            <Outlet></Outlet>
        </main>
        <footer>Footer</footer> */}
      {/* <main>main</main> */}
    </>
  )
}
