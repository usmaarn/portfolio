import {ImTwitter, ImFacebook2, ImGithub, ImLinkedin} from 'react-icons/im'
import styles from '@/styles/index/header.module.scss';
import { Button } from '@/components/Form';
import Wrapper from '@/components/Wrapper'


export default function Header(){

    return(
        <Wrapper id='home'> 
            <div className="md:pt-10">
                <div className={styles.overlay} />
                <div className={styles.header}>
                    <h5 className={styles.hello}>Hello, I Am</h5>
                    <h1 className={styles.name}>Usman Muhammad</h1>
                    <h5 className={styles.title}>Web & software developer</h5>
                    
                    <Button link='#contact' text="Get In Touch" />
                    
                    <div className={styles.socialLinks}>
                        <a className='link' target='_blank' href="https://twitter.com/osmaarn"><ImTwitter /></a>
                        <a className='link' target='_blank' href="/"><ImFacebook2 /></a>
                        <a className='link' target='_blank' href="https://github.com/usmaarn"><ImGithub /></a>
                        <a className='link' target='_blank' href="https://linkedin.com/in/usmaarn"><ImLinkedin /></a>
                    </div>
                </div>
            </div>
        </Wrapper>
    )

}