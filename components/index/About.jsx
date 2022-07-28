

import {DiCode} from 'react-icons/di'
import { Button } from '../Form';
import Wrapper from "@/components/Wrapper"
import {CgChevronDoubleRight} from 'react-icons/cg'

const skills = [
        'HTML', 'CSS', 'JavaScript', 'PHP', 'Python', 'Node JS',
        'React', 'TailwindCss', 'Laravel', 'Django'
    ];

export default function About(props){
    return(
        <Wrapper id='about' title='About me'>
            <div className="grid md:grid-cols-2 gap-10 md:gap-20">

                <div className="">
                    <div className="flex flex-col gap-5 items-start">
                        <p>
                            Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
                        </p>
                        <p>
                            Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.
                        </p>
                        <p>
                                also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.
                        </p>
                        <p>Here are a few technologies I’ve been working with recently:</p>
                 <ul className='w-96 w-full grid grid-cols-2 gap-y-1'>
                    {skills.map(skill => (
                    <li className='flex items-center gap-2'>
                        <CgChevronDoubleRight />{skill}
                        </li>
                    ))}
                </ul>
                        </div>
                </div>  

                <div className="w-full h-64 lg:h-96 md:h-60 bg-blue-100 shadow rounded-lg" />

            </div>
        </Wrapper>
    )
}




function TechInfo({tech}){
    return(
         <div className="bg-white hover:bg-red-400 shadow-lg hover:scale-110
                rounded-xl p-5 flex flex-col items-center gap-5 hover:text-white">
            <div className="w-28 h-28 bg-red-400/40 rounded-full 
                flex items-center justify-center text-5xl">
                <DiCode />
            </div>
            <h1 className="text-xl uppercase font-semibold">{tech.title}</h1>
            <p className="text-center">
                {tech.description}
            </p>
            <Button link='#contact' text='Get In Touch' className='bg-red-500/80' />
        </div>
    )
}