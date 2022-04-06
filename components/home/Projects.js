import styles from '@/styles/home/projects.module.css';
import Link from 'next/link';



export default function Projects() {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-10 md:p-24">
        
        <div className='max-w-[1000px] mx-auto'>
            <h1 className={styles.heading}>Projects</h1>

            <div className={styles.projects}>
                {['Code.NG', 'Class Nigeria', 'Woli Mall', 'Woli Pay', 'Woli Invest', 'Naija Girls'].map(el => (
                    <div className={styles.project} key={el}>
                        <h3 className='absolute top-1/2 w-full text-center -translate-y-1/2 text-2xl font-semibold'>Coming Soon</h3>
                        <button className='px-3 py-1 bg-black text-white text-sm hover:bg-green-500 hover:text-black'>{el}</button>
                        <p className={styles.project_info}>
                            loremDeserunt Lorem et labore minim quis sunt. Consectetur amet elit fugiat aliqua ut. Adipisicing aliqua id nisi eiusmod elit in eiusmod ex veniam aute duis duis nostrud qui.
                        </p>
                    </div>
                ))}
            </div>

            <div className='mt-5 float-right hover:text-green-500'>
                <Link href="/projects">View All</Link>
            </div>

        </div>

    </div>
  )
}
