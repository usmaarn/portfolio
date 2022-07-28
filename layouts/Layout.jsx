
import { Navbar } from '@/layouts/Navbar';
import Footer from './Footer';


export default function Layout({children}){
    return(
        <div>
            <Navbar /> 
            <div className="">
                {children}
            </div>
            <Footer />
        </div>
    )
}