import React, { useState } from 'react'
import {headerNav} from '../contants';


const Header = () => {
    const [show,setShow] = useState(false);
    const ToggleMenu = ()=>{
        setShow((prevShow)=>!prevShow)
    }

  return (
    <header id='header' role='banner'>
        <div className="header_inner">
            <div className="header_logo">
                <a href="/">portfolio<em>react</em></a>
            </div>
            <nav className={`header_nav ${show ? "show":""}`} 
            role='navigation' 
            aria-label='메인메뉴'>
                <ul>
                    {
                        headerNav.map((nav,key)=>(
                            <li key={key}>
                                <a href={nav.url}>{nav.title}</a>
                            </li>
                        ))
                    }

                    {/* <li><a href="#intro">intro</a></li>
                    <li><a href="#skill">skill</a></li>
                    <li><a href="#site">site</a></li>
                    <li><a href="#port">port</a></li>
                    <li><a href="#contact">contact</a></li> */}
                </ul>
            </nav>
            <div 
                className='header_nav_mobile' 
                id='headerToggle'
                aria-controls='primary-menu'
                aria-expanded={show ? "true":"false"}
                role='button'
                tabIndex='0'
                onClick={ToggleMenu}
            >
                <span></span>
            </div>
        </div>
    </header>
  )
}

export default Header

// headerNav.map(()=>())
