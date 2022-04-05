import Link from 'next/link';
import { useAppContext } from 'utils/appContext';
import {FaSun, FaMoon} from 'react-icons/fa';
import {RiMenu5Fill} from 'react-icons/ri'
import styles from 'styles/navbar.module.css';

export default function Navbar(){

    const {toggleTheme, darkMode} = useAppContext();

    return(
        <nav className="relative z-10 h-[100px] p-5 flex items-center justify-between max-w-[1000px] mx-auto">
            <h1 className="font-black text-2xl ">
                <Link href="/">Usmaarn</Link>
            </h1>

            <button className='text-2xl mr-5 md:hidden'>
                <RiMenu5Fill />
            </button>

            <div className='hidden md:flex items-center gap-5'>
                <ul className={styles.menu}>

                    <li className={styles.menuItem}>
                        <Link href='/profile' passHref>
                            <span className='navbar-menu-link'>Profile</span>
                        </Link>
                    </li>
                    <li className={styles.menuItem}>
                        <Link href='/projects' passHref>
                            <span className='navbar-menu-link'>Projects</span>
                        </Link>
                    </li>
                    <li className={styles.menuItem}>
                        <Link href='/blogs' passHref>
                            <span className='navbar-menu-link'>Blogs</span>
                        </Link>
                    </li>
                    <li className={styles.menuItem}>
                        <Link href='contact' passHref>
                            <span className='navbar-menu-link'>Contact</span>
                        </Link>
                    </li>
                    <button className={styles.menuItem} onClick={toggleTheme}>
                        {darkMode ? <FaSun /> : <FaMoon />}
                    </button>
                </ul>

                

            </div>
        </nav>
    )
}