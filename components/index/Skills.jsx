import Wrapper from '@/components/Wrapper'
import StackIcon from '@/components/StackIcon';

export default function Skills({}){

    const skills = [
        'html', 'css', 'javascript', 'php', 'python', 'nodejs',
        'react', 'tailwind', 'laravel', 'django'
    ];

    return(
        <Wrapper id='skills' title='skills'>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 md:gap-10'>
                {skills.map(skill => (
                    <div key={skill} className='flex flex-col items-center bg-sky-200/80 gap-5 shadow py-5 md:py-10'>
                        <span className='text-7xl'><StackIcon icon={skill} /></span>
                        <span className='uppercase font-semibold'>{skill}</span>
                    </div>
                ))}
            </div>
        </Wrapper>
    )
}