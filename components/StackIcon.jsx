import { AiFillHtml5 } from "react-icons/ai";
import {
  SiDjango,
  SiReact,
  SiLaravel,
  SiTailwindcss,
  SiPhp,
} from "react-icons/si";
import {
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoPython,
  IoLogoNodejs,
} from "react-icons/io";


export default function StackIcon({icon}){

    switch (icon.toLowerCase()){
        case 'html':
            return <AiFillHtml5 />
            
        case 'css':
            return <IoLogoCss3 />
            
        case 'javascript' || 'js':
            return <IoLogoJavascript />

        case 'php':
            return <SiPhp />
        
        case 'python':
            return <IoLogoPython />

        case 'nodejs':
            return <IoLogoNodejs />

        case 'react':
            return <SiReact />

        case 'django':
            return <SiDjango />

        case 'laravel':
            return <SiLaravel />

        case 'tailwind' || 'tailwindcss':
            return <SiTailwindcss />

        default:
            <IoLogoCss3 />
    }
}