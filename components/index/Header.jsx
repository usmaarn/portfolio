import {ImTwitter, ImFacebook2, ImGithub, ImLinkedin} from 'react-icons/im'
import styles from '@/styles/index/header.module.scss';
import { Button } from '@/components/Form';
import Wrapper from '@/components/Wrapper'


export default function Header(){

    return(
        <Wrapper id='home'> 
            <div className="pt-10">
                <div className={styles.overlay} />
                <div className={styles.header}>
                    <h5 className={styles.hello}>Hello, I Am</h5>
                    <h1 className={styles.name}>Usman Muhammad</h1>
                    <h5 className={styles.title}>A Full Stack Web developer</h5>
                    <p className='text-lg'>
                        To work as an expert in Web/Software Development proffering solutions 
                        to existing problems and simplifying complex procedures, 
                        also be an excellent performer in a highly competitive environment.
                    </p>
                    <Button text="Get In Touch" />
                    
                    <div className={styles.socialLinks}>
                        <a className='link' href="/"><ImTwitter /></a>
                        <a className='link' href="/"><ImFacebook2 /></a>
                        <a className='link' href="/"><ImGithub /></a>
                        <a className='link' href="/"><ImLinkedin /></a>
                    </div>
                </div>
            </div>
        </Wrapper>
    )

}