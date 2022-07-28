

import {DiCode} from 'react-icons/di'
import { Button } from '../Form';
import Wrapper from "@/components/Wrapper"

export default function About(props){
    return(
        <Wrapper id='about' title='About me'>
            <div className="grid md:grid-cols-2 gap-10 md:gap-20">
                    <div className="w-full h-64 lg:h-96 md:h-60 bg-blue-100 shadow rounded-lg" />

                    <div className="">
                        <div className="text-lg flex flex-col gap-5 items-start">
                            <p>
                                I am Web/Software Developer aspiring to work as an expert in Web/Software Development proffering solutions to existing problems and simplifying complex procedures, also be an excellent performer in a highly competitive environment with a view of contributing to the effectiveness and growth of my community, possessing a strong will to advance in my technical career.
                            </p>
                            <Button link='#contact' text='Get In Touch' />
                        </div>
                    </div>  
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