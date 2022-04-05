import styles from '@/styles/home/heading.module.css';

export default function Heading() {
  return (
    <div className="dark:text-white">

        <div className="font-semibold flex items-center max-w-[1000px] mx-auto gap-5" 
            style={{height: 'calc(100vh - 100px)'}}
        >
            <div className='flex-grow'>
                <h3>Hi there, I am</h3>
                <h2 className="text-4xl font-black">Usman Muhammad</h2> 
                <h3 className="text-lg italic">A Web Developer & Graphic Designer</h3>
                <p className='font-light'>
                    Exercitation quis sint consequat labore pariatur id aute adipisicing in deserunt commodo adipisicing quis sint. Voluptate exercitation tempor excepteur id proident ad sunt qui officia eiusmod laborum reprehenderit. Culpa irure Lorem reprehenderit ipsum ex. Anim qui sint proident cupidatat occaecat tempor eiusmod ut.
                </p>
                <button className={styles.moreBtn}>
                    <span>Download CV</span>
                </button>
            </div>

            <div className="">
                <img className='relative -z-0' src='/pics.png' width={2000} />
            </div>

        </div>
    </div>
  )
}
