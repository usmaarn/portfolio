import Wrapper from '@/components/Wrapper'
import {CgChevronDoubleRight} from 'react-icons/cg'

export default function Skills({}){

    const skills = [
        'html', 'css', 'javascript', 'php', 'python', 'nodejs',
        'react', 'tailwind', 'laravel', 'django'
    ];

    return(
        <Wrapper id='skills' title='tech stack'>
            <ul className='w-96 w-full grid grid-cols-2 gap-y-1'>
                {skills.map(skill => (
                   <li className='capitalize flex items-center gap-2'>
                     <CgChevronDoubleRight />{skill}
                    </li>
                ))}
            </ul>
        </Wrapper>
    )
}