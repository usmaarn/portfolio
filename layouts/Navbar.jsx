import { Button } from '@/components/Form'
import { useState } from 'react'
import {RiMenu5Line, RiCloseFill} from 'react-icons/ri'
import styles from '@/styles/navbar.module.scss'

export default function Navbar(props){

    const [open, setOpen] = useState(false)
    const toggleOpen = () => setOpen(!open)

    return(
        <nav className={styles.navbar}>        
            <h3>
                <a className="text-2xl font-semibold text-green-400" href="/">Usmaarn</a>
            </h3>

            <div className={styles.menu}>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a onClick={toggleOpen} href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                {/* <a href="#blogs">Blogs</a> */}
                <a href="#contact">Contact</a>
            </div>

            <Button link='/my_cv.pdf' text='Download CV' />

            {/* <div className={styles.mobileMenu + ` ${open ? 'flex' : 'hidden'}`}>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
                <Button text='Download CV' />
            </div> */}
{/* 
            <button className='md:hidden text-3xl' onClick={toggleOpen}>
                {open ? <RiCloseFill /> : <RiMenu5Line /> }
            </button> */}

        </nav>
    )
}