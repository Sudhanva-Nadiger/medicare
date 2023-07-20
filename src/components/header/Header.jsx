import { NavLink, Link } from 'react-router-dom'
import { BiMenu } from 'react-icons/bi'

import logo from '../../assets/images/logo.png'
import avatar from '../../assets/images/avatar-icon.png'
import { useEffect, useRef } from 'react'

const navLinks = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/doctors',
    display: 'Find a Doctor'
  },
  {
    path: '/services',
    display: 'Services'
  },
  {
    path: '/contact',
    display: 'Contact'
  },
] 

const Header = () => {

  const headerRef = useRef(null)
  const menuRef = useRef(null)

  const handleStickyHeader = () => {
    window.addEventListener('scroll', () => {
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky__header')
      }else {
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }

  useEffect(() => {
    handleStickyHeader()

    return () => window.removeEventListener('scroll', handleStickyHeader)
  }, [])

  const toggleMenu = () => {
    menuRef.current.classList.toggle('show__menu')
  }

  return (
    <header className="header flex items-center justify-center" ref={headerRef}>
      <div className="container">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div>
            <img src={logo} alt="medicare" />
          </div>

          {/* Menu */}
          <div className='navigation' ref={menuRef} onClick={toggleMenu}>
            <ul className='menu flex items-center gap-[2.7rem]'>
              {
                navLinks.map((item, index) => {
                  return (
                    <li key={item.display + index}>
                      <NavLink to={item.path} className={navClass=>navClass.isActive?'text-primaryColor text-[16px] leading-7 font-[600]':'text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor'}>{item.display}</NavLink>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          
          {/* nav right */}
          <div className='flex items-center gap-4'>
              <div className='hidden'>
                <Link to='/'></Link>
                <figure className='w-[35px] rounded-full'>
                  <img className='w-full rounded-full' src={avatar} alt="userAvatar" />
                </figure>
              </div>

              <Link to='/login'>
                <button className='bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[55px]'>Login</button>
              </Link>

              <span className='md:hidden' onClick={toggleMenu}>
                <BiMenu className='w-6 h-6 cursor-pointer' />
              </span>

          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header