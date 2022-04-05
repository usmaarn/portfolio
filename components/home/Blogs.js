import styles from '@/styles/home/projects.module.css';
import Link from 'next/link';



export default function Blogs() {
  return (
    <div className="bg-gray-200 dark:bg-gray-900 p-10 md:p-24">

        <div className='max-w-[1000px] mx-auto'>

            <h1 className={styles.heading}>MiBlogs</h1>

            <div className={styles.projects}>
                {['Code.NG', 'Class Nigeria', 'Woli Mall', 'Woli Pay', 'Nigeria Girls'].map(el => (
                    <div key={el} className={styles.blog} >
                        <span className='px-3 py-1 bg-black text-white text-sm hover:bg-green-500 hover:text-black'>{el}</span>
                        <p className={styles.blog_info}>
                            loremDes erunt Lorem et labore minim quis sunt. Consectetur amet elit fugiat aliqua ut. Adipisicing aliqua id nisi eiusmod elit in eiusmod ex veniam aute duis duis nostrud qui.
                            <Link href="#" passHref>
                                <span className='font-bold inline-block ml-1 text-green-500'>Read More</span>
                            </Link>
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
